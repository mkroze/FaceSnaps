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
14. First approach to Observables
  1. interval() and subscribe() to read data
  2. async pipe to handle html injection from observables
  3. map() and filter() used inside of pipe() to transform and filter retrieved data from observables
  4. tap() to add special effects 
15. High level Observables
  1. it's practically an observer of observers, it uses the following submethods of map(). 
  The Observer that subscribe is called external observable and the observable that are subscribed to are called internal observables
    1. mergeMap(): ensures parallelism: the external Observable can subscribe to the following internal Observables without waiting for the previous ones to be completed. 
    2. concatMap():ensures serialization: it waits for the inner Observables to complete before subscribing to the next ones - even if the outer Observable transmits several times. The inner Observables will be processed in sequence.
    3. exhaustMap(): ensures the complete processing of a subscription before observing a new emission of the External Observable. If other requests are made in the meantime, they will not be considered. 
    4. switchMap(): processes the last subscription request of the External Observable and cancels any previous uncompleted subscription.
16. Memory leaks
  1. When an observable hasn't been unsubscribed to it generates a flux of data that endangers the performance of the web browser. To avoid such issues, you shall implement observables that are sure to be completed and then destroyed
    1. by using take() method it takes a number as arguments and completes the observable after said number of emissions
    2. by using ngOnDestroy() method inside the component with the following pattern 
      1. import OnDestroy 
      2. add destroy$ field as Subject<boolean> 
      3. initialise said field in ngOnInit() 
      4. destroy it in ngOnDestroy() using next(true) method
17. Form Handlers
  1. two way binding to link a value to the input using [(NgModel)] works for a single input
  2. take the whole form inputs by using NgForm
18. Reactive Form handler
  1. use FormBuilder to generate a FormGroup object
  2. Linking 
    1. form of template to [formGroup]
    2. inputs to formControlName
  3. Observe change in the form using Observable valueChanges
19. Validate inputs
  1. Disable the button until the required fields are filled
  2. Validate the url input of image using RegExp Validators.pattern
  3. change the rythm of emission to the observable to avoid emitting intermediate value changes
20. Add the facesnap
  1. Create a service method that takes the data from the form and adds a facesnap accordingly
  2. call this method from the newFaceSnapComponent, and redirect the user to the faceScanpListComponent