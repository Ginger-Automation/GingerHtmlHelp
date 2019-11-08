rh._.exports({"0":["Gherkin Language in Depth"],"1":["\n  ","\n  ","\n    ","The Gherkin Language is used by many Business and Functional Testers, writing Tests and Automation with the Gherkin Language in a easy to read and write language.","\n  ","1.    GHERKIN – Language Details","\n              If you do not know what Gherkin is, below is summary.","\n             Gherkin is the language that Cucumber understands. It is a Business Readable, Domain Specific Language that lets you describe software's behavior without detailing how that ","\n            behavior is implemented. Gherkin serves two purposes — documentation and automated tests.","\n             You can view the in depth details of the language in the following sections.","\n  ","2.    GHERKIN – Language Syntax","\n              Like Python and YAML, Gherkin is a line-oriented language that uses indentation to define structure. Line endings terminate statements (eg, steps). ","\n              Either spaces or tabs may be used for indentation (but spaces are more portable). Most lines start with a keyword.","\n               Comment lines are allowed anywhere in the file. They begin with zero or more spaces, followed by a hash sign (#) and some amount of text.","\n               The parser divides the input into features, scenarios and steps. When you run the feature the trailing portion (after the keyword) of each step is matched to a Ruby code block ","\n               called Step Definitions.","\n  ","   A Gherkin source file usually looks like this","\n          1: Feature: Some terse yet descriptive text of what is desired","\n          2:   Textual description of the business value of this feature","\n          3:   Business rules that govern the scope of the feature","\n          4:   Any additional information that will make the feature easier to understand","\n          5: ","\n          6:   Scenario: Some determinable business situation","\n          7:     Given some precondition","\n          8:       And some other precondition","\n          9:     When some action by the actor","\n          10:       And some other action","\n          11:       And yet another action","\n          12:     Then some testable outcome is achieved","\n          13:       And something else we can check happens too","\n          14:     ","\n          15:   Scenario: A different situation","\n          16:       ...","\n  ","First line starts the feature. Lines 2–4 are unparsed text, which is expected to describe the business value of this feature. Line 6 starts a scenario. Lines 7–13 are the ","\n      steps for the scenario. Line 15 starts next scenario and so on.","\n  ","3.    GHERKIN – Feature Introduction","\n              Every .feature file conventionally consists of a single feature. A line starting with the keyword Feature followed by free indented text starts a feature. ","\n             A feature usually contains a list of scenarios. You can write whatever you want up until the first scenario, which starts with the word  Scenario (or localized equivalent; ","\n              Gherkin is localized for dozens of languages) on a new line. You can use tagging to group features and scenarios together independent of your file and directory structure.","\n  ","        Every scenario consists of a list of steps, which must start with one of the keywords Given, When, Then, But or And. Gherkin Editors treats them all the same, but you shouldn’t.","\n             Feature Example","\n             Feature: Serve coffee","\n             Coffee should not be served until paid for","\n             Coffee should not be served until the button has been pressed","\n             If there is no coffee left then money should be refunded","\n  ","       Scenario: Buy last coffee","\n              Given there are 1 coffees left in the machine","\n             And I have deposited 1$","\n             When I press the coffee button","\n              Then I should be served a coffee","\n  ","       In addition to a scenario, a feature may contain a background, scenario outline and examples. Respective keywords (in English) and places to read more.","\n  ","4.    GHERKIN – Language Key Words","\n              Below are the Gherkin Key Words, if you want more information please click the associated Link in the More Info.","\n              KeyWord Table with links for additional info if needed.","\n               ","\n  ","\n    ","\n      ","\n        ","\n          ","keyword","\n        ","\n        ","\n          ","localized","\n        ","\n        ","\n          ","more info, see","\n        ","\n      ","\n      ","\n        ","\n          ","name","\n        ","\n        ","\n          ","‘English’","\n        ","\n        "," ","\n      ","\n      ","\n        ","\n          ","native","\n        ","\n        ","\n          ","‘English’","\n        ","\n        "," ","\n      ","\n      ","\n        ","\n          ","encoding","\n        ","\n        ","\n          ","‘UTF-8’","\n        ","\n        "," ","\n      ","\n      ","\n        ","\n          ","feature","\n        ","\n        ","\n          ","‘Feature’","\n        ","\n        ","\n          ","Feature Introduction","\n        ","\n      ","\n      ","\n        ","\n          ","background","\n        ","\n        ","\n          ","‘Background’","\n        ","\n        ","\n          ","Background","\n        ","\n      ","\n      ","\n        ","\n          ","scenario","\n        ","\n        ","\n          ","‘Scenario’","\n        ","\n        ","\n          ","Feature Introduction","\n        ","\n      ","\n      ","\n        ","\n          ","scenario_outline","\n        ","\n        ","\n          ","‘Scenario Outline’","\n        ","\n        ","\n          ","Scenario outlines","\n        ","\n      ","\n      ","\n        ","\n          ","examples","\n        ","\n        ","\n          ","‘Examples’ / ‘Scenarios’","\n        ","\n        ","\n          ","Scenario outlines","\n        ","\n      ","\n      ","\n        ","\n          ","given","\n        ","\n        ","\n          ","‘Given’","\n        ","\n        ","\n          ","Given-When-Then","\n        ","\n      ","\n      ","\n        ","\n          ","when","\n        ","\n        ","\n          ","‘When’","\n        ","\n        ","\n          ","Given-When-Then","\n        ","\n      ","\n      ","\n        ","\n          ","then","\n        ","\n        ","\n          ","‘Then’","\n        ","\n        ","\n          ","Given-When-Then","\n        ","\n      ","\n      ","\n        ","\n          ","and","\n        ","\n        ","\n          ","‘And’","\n        ","\n        ","\n          ","Given-When-Then","\n        ","\n      ","\n      ","\n        ","\n          ","but","\n        ","\n        ","\n          ","‘But’","\n        ","\n        ","\n          ","Given-When-Then","\n        ","\n      ","\n    ","\n  ","\n  ","\n  ","\n  ","\n      ","5.    GHERKIN – Writing Scenarios Best Practices","\n                We suggest to use indentation with spaces to organize your scenarios in your feature file.","\n  ","         File Organization ","\n               You can see how we organized our feature files on a application level with folders shown in Fig 5.1","\n          (fig 5.1)","\n            ","\n  ","\n          Step Optimization for Reusability ","\n             We also suggest to use what has already been developed in the repository. If an activity(Line) has already been developed it will show in the Line helper shown in Fig 5.2. ","\n              While typing the helper box will give you a list of automated steps to choose from. ","\n          Fig 5.2","\n          ","\n  ","\n          If your step does not exist yet, we STRONGLY recommend to use a step line that can be reused. For example if your step is to enter a value in a text box, use the same ","\n          line verbiage exactly. Do not reword the line. This will allow us to reuse the same step. ","\n\n"],"2":["Gherkin Language in Depth"],"id":"222"})