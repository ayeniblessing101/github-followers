import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  selectedFile: File = null;
  selectFile(file) {
    this.selectedFile =  file.target.files[0];
  }
  uploadImage() {
    const fd = new FormData();

    fd.append('image', this.selectedFile, this.selectedFile.name);
  }
}
