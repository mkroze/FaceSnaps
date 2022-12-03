1. Browse through the files
2. Create face-snap component
  1. run cli command
  2. Browse through the generated files
3. Display dynamic data
  1. add fields to facesnapcomponent class (static)
  2. Add button to change value of snaps
  3. create model of facesnap based on previously added fields  
  4. inject facesnap into the component using input of face snap
  5. use it multiple times
4. Dynamic Structure
  1.add optional field in model 
  2.display element according to condition 
    {{*ngIf="condition"}}
  3.display list of elements 
    {{*ngFor="let ElementInArray of elements" [faceSnap]"faceSnapElementInArray"}}
5. Dynamic style
  1.change color of button text according to the number of snaps
    {{[ngStyle]="{ color: 'rgb(0, ' + faceSnap.snaps + ', 0)'}}
  2. change classes dynamically according to a condition 
    {{[ngClass]="{ snapped: buttonText === 'Oops, unSnap!' }"}}
6. format writing display using pipes
  {{this.field | (titlecase OR lowercase OR uppercase) }}
7. format date display using pipes
  {{this.field | date}} 
  Datepipe documentation : https://angular.io/api/common/DatePipe#pre-defined-format-options
8. change local language
9. Format numbers using following pipes
  1. DecimalPipe 
  2. PercentPipe 
  3. CurrencyPipe 
10. Create facesnap list component
  1. ngOnInit: void {constructor}
11. Share data via Services
  1. Create services folder 
  2. create face-snaps.service.ts file in services folder
  3. Inject service into the faceSnapList component
  4. Centralize data logic in services => increase number of snaps using the service
12. Routing module
  1. Add two routes linked to two components
  2. Move from one component to another using nav in header
  3. Move directly from one component to another using onContinue() method
13. Add singleSnapFace component
  1. select the single face snap from the id in the url