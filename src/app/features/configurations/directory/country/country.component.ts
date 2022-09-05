import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Country } from 'src/app/core/models/country';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries:Country[]=[];
  tableCountries:Country[]=[];
  searchCountries:Country[]=[];
  countryForm:FormGroup = this.fb.group({
    id:[],
    name:[,[Validators.required,Validators.minLength(3)]],
    areaCode:[,[Validators.required]],
    isoCode:[,[Validators.required]],
  })


  baseUrl = environment.apiHost;
  isVisible=false;
  countrySearch:string='';
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCounties();
  }

  loadCounties(){
    this.http.get<Country[]>(`${this.baseUrl}Country`).subscribe(result=>this.tableCountries=this.countries=result)
  }
  edit(country:any){
    this.countryForm.setValue(country);
    this.isVisible=true;
  }
  
  del(country:any)
  {
    
  }

  saveCountry()
  {
    if(this.countryForm.valid)
    {

    }
  }

  search(){
    if(this.countrySearch.length>3)
    {
      this.tableCountries =this.countries.filter(c=>c.name.toLocaleLowerCase().startsWith(this.countrySearch.toLocaleLowerCase()));
      

    }else if(this.tableCountries.length!== this.countries.length)
    {
      this.tableCountries =this.countries;
    }

  }
}
