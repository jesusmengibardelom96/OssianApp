
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ConfigService } from '../Services/config.service';
import { ImageUploadService } from '../Services/image-upload.service';

import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog/alert-dialog.component';

import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  //------------Variables----------
  //Array of images
  images: any = [];
  
  //Number of times u have been connected
  connection: number = 0;
  
  //Flag for the image details
  viewDescription: boolean = false;
  
  //the image id
  imageId: string;
  
  //Flag to know if page is loaded
  isPageLoaded: boolean = false;
  
  //Flag to know if button add image was clicked
  buttonAddClicked: boolean = false;
  
  //The selected image in the input file
  selectedImage: File;
  
  //Flag to know if you are editing the image
  isEditingImage: boolean = false;
 
  //The image selected
  image: any;

  //Formulary for edition of the images
  editImageForm = new FormGroup({
    newImageTitle: new FormControl(""),
    newImageCategory: new FormControl(""),
    newImageDescription: new FormControl(""),
    newImageSelect: new FormControl(""),
  })
  //------------End of Variables----------

  constructor(private configService: ConfigService, private imageUploadService: ImageUploadService, private toastr: ToastrService, private dialog: MatDialog) { }

  //Init of the app
  ngOnInit(): void {
    //if u have been never connected to the web then set the conection cont to 0
    if (JSON.parse(localStorage.getItem("Connection")) === null) localStorage.setItem("Connection", JSON.stringify(this.connection));

    //if u have been connected more than once then u get the information of the images from DB else u get the information of images from api
    this.connection = JSON.parse(localStorage.getItem("Connection"));
    if (this.connection === 0) {
      this.connection++;
      localStorage.setItem("Connection", JSON.stringify(this.connection));
      //get images from the API
      this.configService.getConfigFromAPi();
      this.setLocalImages();

      setTimeout(() => {
        
        for (let image of this.images) {
          let imageJSON = {
            title: image.title,
            description: image.description,
            category: image.category,
            url: image.url
          };
          
          this.configService.setAPIToDB(imageJSON);
        }
      }, 2000);
    } else {
      this.configService.removeConfig();
      //get the images from DB
      this.configService.getConfigFromDB();
      this.setLocalImages();
    }
  }

  
  //------------------Insert--------------
  //Inserts the image into DB
  insertImage(image) {
    
    if (this.selectedImage === undefined || !this.selectedImage.type.includes("image") || this.selectedImage.name === null || image.value.imageTitle === null || image.value.imageCategory === null || image.value.imageDescription === null) {
      this.toastr.error("You can't upload an empty image", "Error", { timeOut: 1500 });
      image.reset();
    } else {
      this.isPageLoaded = false;
      this.buttonAddClicked = false;
      const uploadData = new FormData();
      uploadData.append('myFile', this.selectedImage, this.selectedImage.name);
      this.imageUploadService.uploadImage(uploadData);

      
      let json_image = {
        title: image.value.imageTitle,
        category: image.value.imageCategory,
        description: image.value.imageDescription,
        url: "http://localhost:80/upload/" + this.selectedImage.name
      }

      this.configService.setAPIToDB(json_image);

      //get the images from DB
      this.toastr.success("Succesfully uploaded!", "Success!", { timeOut: 1500 });
      setTimeout(()=>{this.ngOnInit()}, 1500);
    }
  }
  //-----------------End of Insert--------------

  //-----------------Delete--------------
  //Open a dialog when u are going to delete
  deleteItem(imageId, imgTitle){
    //Open a confirm dialog
    this.openDialog(imgTitle, imageId);
  }

  //Open the dialog and if u confirm the delete, the image is deleted and refresh the page (dinamically talking)
  openDialog(imgTitle, imageId) {
    let message = "Are you sure you want to delete this image? this action can't be undone";
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: message,
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        },
        header: "Deleting image with title '" + imgTitle + "'"
      }
    });
    
    //After closed the dialog it delete the image from DB
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.isPageLoaded = false;
        this.buttonAddClicked = false;
        this.configService.deleteImageFromDB({imageId: imageId});

        //get the images from DB
        this.toastr.success("Succesfully deleted!", "Success!", { timeOut: 1500 });
        setTimeout(()=>{
          this.ngOnInit();
        }, 1500);
      }
    });
  }
  //-----------------End of Delete--------------

  
  //-----------------Edit-----------------------
  //refill the formulary when you are editing a image
  get newImageTitle(){return this.editImageForm.get("newImageTitle")}
  get newImageCategory(){return this.editImageForm.get("newImageCategory")}
  get newImageDescription(){return this.editImageForm.get("newImageDescription")}
  get newImageSelect(){return this.editImageForm.get("newImageSelect")}

  //Open the formulary to edit the image details
  editImage(image){
    
    if (this.isEditingImage === false) {
      this.image = image;
      this.isEditingImage = true;
      this.buttonAddClicked = false;
      this.viewDescription = false;
      this.newImageTitle.setValue(image.title);
      this.newImageCategory.setValue(image.category);
      this.newImageDescription.setValue(image.description);
    } else {
      this.isEditingImage = false;
    }
  }

  //Update the image you selected from DB
  updateImage(editImageForm){
      this.isPageLoaded = false;
      this.isEditingImage = false;

      let json_image = {
        id: "",
        title: "",
        description: "",
        category: "",
        url: ""
      };
      if(this.selectedImage === undefined){
        json_image = {
          id:this.image.id,
          title: this.newImageTitle.value,
          description: this.newImageDescription.value,
          category: this.newImageCategory.value,
          url: this.image.url
        }
      }else{
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedImage, this.selectedImage.name);
        this.imageUploadService.uploadImage(uploadData);

        json_image = {
          id:this.image.id,
          title: this.newImageTitle.value,
          description: this.newImageDescription.value,
          category: this.newImageCategory.value,
          url: "http://localhost:80/upload/" + this.selectedImage.name
        }
      }

      

      if(JSON.stringify(this.image) !== JSON.stringify(json_image)){
        
        this.configService.updateImageFromDB(json_image);

        //get the images from DB
        
        this.toastr.success("Succesfully updated!", "Success!", { timeOut: 1500 });
        setTimeout(()=>{this.ngOnInit();}, 1500);
      }else{
        this.toastr.warning("Nothing has changed or updated", "Warning!", { timeOut: 1500 });
        this.isPageLoaded = true;
      }
  }
  //------------------------End of Edit----------------------

  //------------------------Functions------------------------

  //set the array of the images
  setLocalImages() {
    setTimeout(() => {
      this.images = JSON.parse(localStorage.getItem("Images"));
      this.configService.removeConfig();
      this.isPageLoaded = true;
    }, 2000);
  }

  //Shows the form to insert an image
  isAddButtonClicked() {
    if (this.buttonAddClicked === false) {
      this.isEditingImage = false;
      this.buttonAddClicked = true;
    } else {
      this.buttonAddClicked = false;
    }
  }

  //Shows the description of the images
  seeDescription(imageId) {
    
    if (this.viewDescription === false) {
      this.imageId = imageId;
      this.viewDescription = true;
    } else {
      this.viewDescription = false;
    }
  }

  //Set the selected image
  onFileChange(event) {
    this.selectedImage = event.target.files[0];
    
  }
  //----------------------End of Functions-------------------

}
