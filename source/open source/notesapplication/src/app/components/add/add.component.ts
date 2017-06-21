import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public addForm: FormGroup;
  public titleInvalid;
  public tagInvalid;
  public error = false;
  public errorOptions = { width: '22rem', message: '' };

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { 
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tag: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('disply message');
    if (this.formValid()) {
      console.log('disply form');
      this.createNote();
    } else {
      console.log('disply error message');
      this.error = true;
      this.errorOptions.message = 'Please fill all required fields';
    }
  }

  createNote() {
    let note = {
      title: this.addForm.get('title').value,
      content: this.addForm.get('content').value,
      tag: this.addForm.get('tag').value
    }
    this.api.addNote(note).subscribe((res:any)=> {
      console.log('note created', res);
      this.router.navigate(['']);
    }, err => {
      this.error = true;
      this.errorOptions.message = 'Failed to create note';
      console.log('note not created', err);
    });
  }


  clearError() {
    this.error = false;
  }

  formValid(): boolean {
    this.titleInvalid = this.addForm.get('title').value.trim() === '';
    this.tagInvalid = this.addForm.get('tag').value.trim() === '';

    return !this.titleInvalid && !this.tagInvalid;
  }

  goBack() {
    this.router.navigate(['']);
  }

}
