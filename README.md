# Guess the Globe
(Developer: Keith Bautista)

![Mockup image](docs/am-i-responsive.png)

[Live Website](https://keithbautista.github.io/guess-the-globe/index.html)

## Table of Contents
1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)

2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements](#user-requirement)

3. [User Stories](#user-stories)
    1. [First Time User](#first-time-user)
    2. [Returning User](#returning-user)
    3. [Site Owner](#site-owner)

4. [Design Decisions](#design-decisions)
    1. [Design Choices](#design-choices)
    2. [Color](#color)
    3. [Fonts](#fonts)

5. [Structure of Pages](#structure-of-pages)

6. [Wireframes](#wireframes)

7. [Technologies Used During Creation](#technologies-used-during-creation)

8. [Frameworks & Tools](#frameworks-&-tools)

9. [Features](#features)
    1. [Menu and Menu Tabs](#menu-and-menu-tabs)
    2. [Images](#Images)
    3. [Contact Us](#contact-us)
    4. [Footer](#footer)
    5. [Progress-Bar](#progress-bar)
    6. [404 Error](#404-error-page)



## Project Goals

### User Goals

- Ability to be able to find a quiz game.
- Ability to find a quiz game that provides its content in a clear and consise manner.
- Ability to contact the developer whom created the site.

### Site Owner Goals

- Provide a fun and exciting game that includes pictures.
- Ability for users to be able to contact with me.
- Provide an easy and simple way to see progress through a synamic progress bar.

## User Experience

### Target Audience

- People who are looking for a fun and quick game.
- People whom are interested in flags and countries

### User Requirements

- A website which is intuitive and is simple to navigate around.
- Easily find information within a couple clicks such as rules and contact information.
- Links and Buttons works as expected.
- Ability to easily get in contact with Business through the site.
- Easily access through different forms of interaction (Mobile and Desktop).

## User Stories

#### First Time User

1. As a first time user I would like to see a simple layout that is easily navigatable.
2. As a first time user I would like to know how the game works.
3. As a first time user I would like to know my current progress through the questions.

#### Returning User

4. I want to be able to play the game on any device that I choose, especially my phone.
5. I want to play the game with friends and family to compare knowledge on flags and countries.

#### Site Owner

6. As the site owner I want users to enjoy the game I have created.
7. As the site owner I want users to have the ability to get in contact with me in case further oportunities arise.
8. As the site owner I want the users to be able to easily access the site and know their current progress through the questions.

## Design Decisions

### Design Choices

This website was created with the idea of space or up in the athmosphere as those are the only times where you are able to see countries as a whole. The hope is to provide a website that is easily accessible.

### Color

For color I have kept it simple with the major colors being a dark shade of blue (#003f64) with aspects of white and black as the majority of the font colors. 

![Colour Scheme](docs/adobe-color-palette.png)

### Fonts 

Mina with from Google Fonts was used for the majority of this project with a fall back of sans serif. Mina was specifically chosen as it slightly imitated characters that you you associate with space and flight.

## Structure of Pages

There are only two html files that this project consists of, index.html as well as the 404.html page.

- index.html: This is only a one page site whereby the rest of the content is hidden in modals. Content such as the rules as well as the contact form.
- 404.html: This is the only other page apart from the index.html. This page consists of an image with 404 written accross it as well as a button below it to be able to return back to the index.html page.

## Wireframes

<details>
<summary>Index.html Web</summary>
<img src="docs/index-html-wf.png">
</details>
<details>
<summary>404.html Web</summary>
<img src="docs/404-html-wf.png">
</details>
<details>
<summary>Index.html Phone</summary>
<img src="docs/index-html-wf-phone.png">
</details>
<details>
<summary>404.html Phone</summary>
<img src="docs/404-html-wf-phone.png">
</details>

## Technologies Used During Creation

- HTML
- CSS
- JavaScript

## Frameworks & Tools
- Bootstrap v4.6
- Git
- Github
- uizard (wireframes)
- Google Fonts
- Adobe Color
- Font Awesome
- Favicon.io
- Unsplash
- Pexels
- Pixabay
- imagecompressor (Compressing Images)
- cloudconvert (Converting Images into WebP Format)
- Am I Responsive
- Google Lens

## Features

This website consists of 2 pages. (index.html and 404.html)

### Navigation Bar

- The navbar is completely responsive and turns into a toggler (hamburger menu) once the screen becomes too small
    - It allows the customer to easily navigate the site.
    - The button for rules, instead of opening a new page, will instead open a modal on the same page.

![Logo and Navbar](docs/features-nav-bar-and-logo.png)

### Images 

- For each question there is an image associated with it using an array. This will update when the button "next question" is pressed.
- Along with the above, if the correct answer is pressed, the background of each potential answer with either turn green or red depending on if it is correct or wrong.

![Gallery Page](docs/features-images.png)

### Contact Us

- The Contact Us page is hidden and only shown when the icon under "contact developer". A modal was used in creating the form. If the x on the top right or if the cursor is clicked outside the card then the contact form will again disappear.
    ![Contact Form](docs/features-contact-form.png)

### Progress-Bar

- The progress bar allows users to know where they are in terms of progress and finishing the quiz.
![progress-bar](docs/progress-bar.png)

### Footer

- The footer consists of 3 sections, the explore project section, contact developer section and also the copyright section at the bottom of the page.
![Footer](docs/features-footer-contact-handles.png)

## Validation

### HTML Validation

The <a href="https://validator.w3.org/" target="_blank">W3C Markup Validation Service</a> was used to validate the HTML of the site. Shown below are screenshots of the validation. Note that all pages pass with no errors as well as no warnings to show.

<details>
<summary>Index.html</summary>
<img src="docs/html-validation-index.png">
</details>
<details>
<summary>404.html</summary>
<img src="docs/html-validation-404.png">
</details>

### CSS Validation

The <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS Validation Service</a> was used to validate the CSS of the site. Shown below are screenshots of the validation. Please note that during validation, the CSS pases with no errors found.

<details>
<summary>Style.CSS External Style Sheet</summary>
<img src="docs/css-validation.png">
</details>

## Accessibility

The WAVE WebAIM Accessibility Tool was used to validate and evaluate the accessibility of each page of the site. Please find the screenshots of these below.

<details>
<summary>Index.html</summary>
<img src="docs/wave-accessibility-index.png">
</details>
<details>
<summary>404.html</summary>
<img src="docs/wave-accessibility-404.png">
</details>

## JSHint

JSHint was used to validate and evaluate the JavaScript of the site Please find the screenshots of these below.

<details>
<summary>Functions</summary>
<img src="docs/jshint-functions.png">
</details>
The JSHint test initially provided plenty of warnings regarding missing semi colons which have now been fixed. There are currently errors with the following text "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." Though by adding in 
{
  "esversion": 6
}
the errors will disappear.

## Performance

Tool used was Google Lighthouse which is accessible through the inspect tool, and second to last in its navbar. Like Accessibility, screenshots for performance on each page are below.

<details>
<summary>index.html</summary>
<img src="docs/lighthouse-performance-index.png">
</details>
<details>
<summary>404.html</summary>
<img src="ddocs/lighthouse-performance-404.png">
</details>
While Accessibility, Best Practices and SEO are all nearly reaching 100, Performance is 76 which is to be expected due to the amount of images within the questions array. Optimization attempts were to compress each image as well as convert from PNG to WebP which was recommended directly from Google as it was developed by them.

## Performing tests on multiple devices

The website was tested on the following devices below:
- Dell Latitude 7820
- OnePlus Nord
- Various Devices were also software tested through Google's Chrome Developer Tool which enables you to toggle the screen size of different devices.

## Browser Compatibility

The website was tested on the following browsers:
- Google Chrome
- Brave
- Microsoft Edge

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automaticaly you will se a ribbon on the top saying: "Your site is published at https://keithbautista.github.io/guess-the-globe/index.html"
- Prior to this, I used the GitPod Interface to create the website, please note that GitPod is linked with GitHub which made it easy to make any changes, see changes in real time and also commit and push changes to GitHub.

To fork the following repository
1. Go to the GitHub repository.
2. Click on Fork icon in top right hand corner of the page.

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code Tab above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## Credits 
- Web Dev Simplified helped tremendously with understanding further and in depth into creating the quiz.
- The programs used for images such as pixabay, unsplash, pexels were definitely helpful!
### Code and Acknowledgements
- Creating this website meant that I relied on Stack Overflow, W3Schools, Youtube, Bootstrap Documentation and of course the course content for Full Stack Development provided by Code Institute.
<a href="https://getbootstrap.com/docs/4.1/components/navbar/">Bootstrap</a> used for Navbar, Carousel, Button Format.
<a href="https://www.w3schools.com/html/default.asp">W3Schools</a> used for Text Formatting, Text-Decoration, Media Queries 

Please be advised that this project is for educational use only and was created for the Code Institute Full Stack Module.