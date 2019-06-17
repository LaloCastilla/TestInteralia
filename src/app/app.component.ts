import {Component} from '@angular/core';
import {DatosUsuario} from './datos-usuario';
import {Service} from '../services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service]
})
export class AppComponent {

  model = new DatosUsuario('', '', '', '','');

  username:any;
  templateJson = {
    "status": 0,
    "data":
      {
        "user":
          {
            "birthday": "2000-01-18",
            "email": "faketest2@mail.com",
            "residency":
              {
                "country": "MX"
              },
            "givenName": "demo",
            "familyName": "demo",
            "gender": "Other"
          },
        "form": [
          {
            "form": "editProfileForm",
            "fields": [
              {
                "name": "firstName",
                "type": "text",
                "label": "First Name",
                "placeholder": "First Name",
                "tip": "",
                "validation":
                  {
                    "messages":
                      {
                        "required": "First name is required.",
                        "readOnly": "Read only attribute"
                      },
                    "required": true,
                    "readOnly": true
                  },
                "schemaAttribute": "givenName"
              },
              {
                "name": "familyName",
                "type": "text",
                "label": "Family Name",
                "placeholder": "Family Name",
                "tip": "",
                "validation":
                  {
                    "messages":
                      {
                        "required": "Family name is required.",
                        "readOnly": "Read only attribute"
                      },
                    "required": true,
                    "readOnly": true
                  },
                "schemaAttribute": "familyName"
              },
              {
                "name": "emailName",
                "type": "email",
                "label": "Email",
                "placeholder": "Email",
                "tip": "",
                "validation":
                  {
                    "messages":
                      {
                        "required": "Email is required.",
                        "readOnly": "Read only attribute"
                      },
                    "required": true,
                    "readOnly": true
                  },
                "schemaAttribute": "emailName"
              },
              {
                "name": "birthday",
                "type": "birthday",
                "label": "Birthday",
                "placeholder": "Birthday",
                "tip": "",
                "validation":
                  {
                    "messages":
                      {
                        "required": "Birthday is required.",
                        "readOnly": "Read only attribute"
                      },
                    "required": true,
                    "readOnly": true
                  },
                "schemaAttribute": "birthday"
              },
              {
                "name": "gender",
                "type": "select",
                "options": [
                  {
                    "disabled": true,
                    "text": "--",
                    "value": ""
                  },
                  {
                    "text": "Not Specified",
                    "value": "not specified"
                  },
                  {
                    "text": "Male",
                    "value": "male"
                  },
                  {
                    "text": "Female",
                    "value": "female"
                  },
                  {
                    "text": "Other",
                    "value": "other"
                  }],
                "value": "",
                "label": "Gender",
                "placeholder": "Gender",
                "validation":
                  {
                    "messages":
                      {
                        "readOnly": "Read only attribute"
                      },
                    "readOnly": true
                  },
                "schemaAttribute": "gender"
              }],
            "i18nStrings":
              {
                "buttonSubmit": "Submit edit profile"
              }
          }]
      }
  }

  forms = this.templateJson.data.form[0].fields;
  forms2:any;

  constructor(private service:Service){
    this.forms2 = this.service.getForms();
  }


  ngOnInit() {
    //alert(this.forms.length);
  }

  onSubmit() { alert('Usuario registrado' + JSON.stringify(this.model)); }


}
