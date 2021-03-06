import { Component, OnInit,Input, Output,EventEmitter,ElementRef    } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {
userForm = new FormGroup({
     name: new FormControl(),
     age: new FormControl()
}); 
theHtmlString:any;
todoList:any;
value:Date;
isData=false;
url:any;
reader:any;
target:EventTarget;
resultSet:any;


  constructor(private elementRef: ElementRef) {
   this.todoList=[];
   this.value=new Date();
   this.isData=true;   
   }

  ngOnInit() {
  }

@Output()
  change : EventEmitter<any> = new EventEmitter<any>();

  onFormSubmit(): void {
      // const tmp = document.createElement('div');
      // tmp.innerHTML="<h4>"+this.userForm.get('name').value+"</h4>";
      //this.todoList.push(tmp.innerHTML); 
      this.todoList.push(this.userForm.get('name').value);
      this.isData=false;
      this.userForm.reset();
}
      changeListener($event: any) {
        var self = this;
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        myReader.readAsText(file);
        var resultSet = [];
        myReader.onloadend = function(e){
            // you can perform an action with data read here
            // as an example i am just splitting strings by spaces
            var columns = myReader.result.split(/\r\n|\r|\n/g);

            for (var i = 0; i < columns.length; i++) {
                resultSet.push(columns[i].split(' '));
            }

            self.resultSet=resultSet; 
            console.log(self.resultSet)// probably dont need to do this atall
            //self.complete.next(self.resultSet); // pass along the data which would be used by the parent component
        };
    }


  readUrl(event) :any{
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (imagesrc:any) => {
      this.url = imagesrc.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}


    deleteTask(indexVal):void{
    this.todoList.splice(indexVal);
    if(this.todoList.length > 0){

    }
    else{
      this.isData=true;
    }
    }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        
        if(file.size < 14633){
           let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        debugger;

        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )  
        }
        else{
          alert("File can't upload size: "+file.size);
          event.preventDefault();
        }
        
    }
}

}
