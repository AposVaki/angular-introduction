# Εισαγωγή στο Angular Framework

## Βήμα 12: Reactive Forms
 
- Ξεκινάμε με τα αντίστοιχα βήματα όπως στο βήμα 11.
 
Η φόρμα ορίζεται στο component και συνδέεται με τα input του template. Ένας click handler μεταφέρει τα δεδομένα στο component και στη συνέχεια ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.
 
- Χρήση του `ReactiveFormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να μπορούν να συσχετιστούν με τα χαρακτηριστικά του component).
- Χρήση των κλάσεων `FormGroup` και `FormControl` για τη δόμηση του αντικειμένου που παράγεται από τη φόρμα. Χρήση των `Validators`.
- Δέσμευση του χαρακτηριστικού `form` του component με χρήση του `<form [formGroup]="form">...</form>`.
- Σύνδεση του input με το `FormControl` με χρήση του `formControlName`.
- Άμεση πρόσβαση στο πεδίο της φόρμας με το `form.get('όνομα πεδίου')`
- Κατά το Submit το χαρακτηριστικό `form` έχει ήδη τιμή στο component.

## Βήμα 11: Template Driven Forms
 
- Δημιουργία των `EpersonTemplateDrivenFormComponent` και `TemplateDrivenFormExampleComponent`.
- Ενημέρωση του μενού της εφαρμογής μας (στο `app.routes.ts` και στο `list-group-menu.component.ts`).
- Επέμβαση στο `SimpleDatatableComponent` για την περίπτωση του κενού πίνακα.
- Χρήση του Angular Forms Module.
 
Η φόρμα ορίζεται στο template και μεταφέρει δεδομένα στο component κατά την υποβολή της. Συνήθως τότε, ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.
 
- Χρήση του `FormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να δημιουργούνται objects από τις φόρμες).
- `<form #form="ngForm">...</form>` ορίζει πως η HTML φόρμα δημιουργεί ένα αντικείμενο που είναι διαχειρίσιμο στα πλαίσια του template με τη μεταβλητή (template variable) `form`.
- Το αντικείμενο `form` περνά σαν όρισμα στο `onSubmit(form)` όταν συμβεί το event `onSubmit` (ελέγχεται από το κουμπί Submit που μπορεί να πατηθεί μόνο όταν η φόρμα είναι ορθά συμπληρωμένη (valid)).
- Δίνουμε στο name του input το όνομα του χαρακτηριστικού του αντικειμένου που παράγει η φόρμα και σχετίζεται (το χαρακτηριστικό) με το συγκεκριμένο input. Το συγκεκριμένο χαρακτηριστικό συμμετέχει στο αντικείμενο μόνο αν συμπεριλάβουμε την οδηγία `ngModel`.
- Με το `#givenName="ngModel"` δηλώνουμε τη μεταβλητή template με όνομα `givenName` που είναι αντικείμενο που μπορεί να εξεταστεί για την ορθότητά του με το `givenName.errors` και να χρησιμοποιηθεί για την υπο συνθήκη εμφάνιση επεξηγηματικού κειμένου για το ενδεχόμενο λάθος ορθότητας.

## Βήμα 5: Event binding

- Δέσμευση μεθόδου της κλάσης (event handler) στο συμβάν `event` του template με χρήση του `(eventName)="onEventName($event)"`

  ```html
  <button (click)="onAddPerson()">Add Person</button>
  ```

- Χρήση του event `input` από ένα HTML input element για ανάγνωση της τιμής του στην κλάση και στη συνέχεια πέρασμα πίσω στο template με χρήση της απλής δέσμευση με το `{{ <atribute_name > }}`

  ```html
  <input type="text" (input)="onInput($event)" />
  ```

## Βήμα 4: @for Template Directive

- Ορισμός χαρακτηριστικού `persons` τύπου `Person[]` στην κλάση `AppComponent` (πίνακας αντικειμένων τύπου `Person`)
- Χρήση του template directive `@for(obj of objects); track obj` για την εμφάνιση των δεδομένων του πίνακα `persons` με τη χρήση του component `PersonTableComponent`

  ```html
  @for (user of users; track user) {
  <app-person-table [person]="user"></app-person-table>
  }
  ```

## Βήμα 3: Component Input

- Δημιουργία interface για τα δεδομένα τύπου `Person`

  ```bash
  ng generate interface shared/interfaces/person
  ```

  ```typescript
  export interface Person {
    givenName: string;
    surName: string;
    age: number;
    email: string;
    address: string;
  }
  ```

- Χρήση του interface `Person` ως τύπο του χαρακτηριστικού `person` στο component `PersonTableComponent`

- Χρήση του decorator `@Input()` στο χαρακτηριστικό `person` τύπου `Person` ή `undefined` στο component `PersonTableComponent`

- Χρήση του `@if() {} @else {}` στο template του component `PersonTableComponent` για την υπό συνθήκη εμφάνιση των δεδομένων του χαρακτηριστικού `person`

- Η δέσμευση των χαρακτηριστικών της κλάσης `AppComponent` στο χαρακτηριστικό `person` του component `PersonTableComponent` γίνεται στο template του component `AppComponent`

  ```html
  <app-person-table [person]="person0"></app-person-table>
  <!-- Χωρίς δέσμευση στο επόμενο -->
  <app-person-table></app-person-table>
  <app-person-table [person]="person1"></app-person-table>
  ```

## Βήμα 2: Δημιουργία νέου component

- Δημιουργία ενός νέου component με την εντολή `ng generate component components/person-table`.
- Μεταφορά του πίνακα από το `app.component.html` στο template του νέου component.
- Μεταφορά του χαρακτηριστικού `person` από την κλάση `AppComponent` στην κλάση `PersonTableComponent`.
- Συμπερίληψη της κλάσης `PersonTableComponent` στον πίνακα `imports` στην αρχικοποίηση του decorator στο αρχείο `app.component.ts`.
- Χρήση του νέου component στο template του `app.component.html` με την ετικέτα `<app-person-table></app-person-table>`.

## Βήμα 1: Απλή δέσμευση χαρακτηριστικών (one way binding)

- Χρήση του placeholder `{{ <atribute_name > }}` για τη δεσμευση του χαρακτηριστικού `attribute_name` στο template του component.
- Αν το χαρακτηριστικό της κλάσης είναι αντικείμενο τότε χρησιμοποιούμε τη γνωστή σύνταξη `{{ <object_name>.<attribute_name> }}`.

## Βήμα 0: Προετοιμασία και βασικές ενέργειες

- Εγκατάσταση του Angular CLI

  ```bash
  npm install -g @angular/cli@latest
  ```

- Δημιουργία ενός νέου Angular Project

  ```bash
  ng new angular-introduction --standalone --skip-tests
  ```

- Επεμβάσεις στο αρχείο `ts.config.json`

  ```json
  {
  ...
  "compilerOptions": {
      ...
      "baseUrl": "./",
      "strict": false,
      ...
  }
  ...
  }
  ```

- Εκκίνηση του Angular Project

  ```bash
  ❯ ng serve
  Initial chunk files | Names         | Raw size
  polyfills.js        | polyfills     | 83.60 kB |
  main.js             | main          |  1.67 kB |
  styles.css          | styles        | 95 bytes |

                      | Initial total | 85.36 kB

  Application bundle generation complete. [1.241 seconds]

  Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
  ```

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `http://localhost:4200/`

- Δημιουργία online repository στο GitHub (`angular-introduction`) και αποστολή του κώδικα

  ```bash
  git remote add origin git@github.com:christodoulos/angular-introduction.git
  git push -u origin main
  ```

- Δημιουργία του repository `<username>.github.io` αν δεν υπάρχει ήδη.

- Προσθήκη δυνατότητας deployment στις σελίδες gh-pages του GitHub

  ```bash
  ng add angular-cli-ghpages
  ```

- Προσθήκη του _deploy_ script στο αρχείο `package.json`

  ```json
  {
  ...
  "scripts": {
      ...
      "deploy": "ng deploy --base-href=https://<username>.github.io/angular-introduction/"
  }
  ...
  }
  ```

- Αποστολή της εφαρμογής στις σελίδες gh-pages του GitHub

  ```bash
  npm run deploy
  ```

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`

- Ενεργοποίηση του GitHub Pages για το repository `<username>.github.io/angular-introduction`

- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`

- Εγκατάσταση του bootstrap

  ```bash
  npm install bootstrap
  ```

- Επεξεργασία του αρχείου `angular.json`

  ```json
  {
  ...
  "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  ...
  }
  ```

- **Επανεκκίνηση του Angular Project** μετά από κάθε αλλαγή στο αρχείο `angular.json` είναι απαραίτητο να εκκινηθεί ξανά το Angular Project (^C και ξανά `ng serve`)

- Τοπική εγκατάσταση του `prettier` και δημιουργία του αρχείου `.prettierrc`

  ```bash
  npm install --save-dev prettier
  ```

  ```json
  {
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  }
  ```
