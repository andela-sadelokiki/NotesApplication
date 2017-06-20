import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  public noteDetails;
  public paramId;
  public noteId;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private route: ActivatedRoute) { 
    this.editForm = this.fb.group({
      title: [''],
      content: [''],
      tag: ['']
    })
  }

  ngOnInit() {
    this.buildForm();
  }

   buildForm() {
    this.editForm = this.fb.group({
      title: [this.noteDetails.title],
      content: [this.noteDetails.content]
    });
  console.log('building', this.noteDetails, this.editForm);
  }

   initForm() {
   this.editForm = new FormGroup({
       title: new FormControl({
         value: ''
       }),
       content: new FormControl({
         value: ''
       })
     })
  }

 fetchId() {
    this.paramId =  this.route.params.subscribe(params => {
      let id = params['id']
      this.noteId = id;
    });
  }


  getNoteDetails(id, notes) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i]._id === id) {
        return notes[i];
      }
    }
  }

  updateNote(id) {
    let note = {
      title: this.editForm.get('title').value,
      content: this.editForm.get('content').value,
      tag: this.editForm.get('tag').value
    }
    this.api.updateNote(id,note).subscribe((res:any)=> {
      console.log('note updated', res);
      this.router.navigate(['']);
    }, err => {
      console.log('note not created', err);
      alert('Failed to create note');
    });
  }

}
