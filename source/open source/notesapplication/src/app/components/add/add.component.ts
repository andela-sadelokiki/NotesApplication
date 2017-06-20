import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { 
    this.addForm = this.fb.group({
      title: [''],
      content: [''],
      tag: ['']
    })
  }

  ngOnInit() {
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
      console.log('note not created', err);
      alert('Failed to create note');
    });
  }

}
