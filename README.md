[Download the epub](https://github.com/fxpar/interactive-epub-checker/raw/master/Test%20interactive%20Epub%20checker.epub) to check some interactive contents on your reader.



# interactive epub checker
Epub are great educative tools. Here is a [file](https://github.com/fxpar/interactive-epub-checker/raw/master/Test%20interactive%20Epub%20checker.epub) to test a good deal of interactions with user:
* **creating quiz**: 
  * hiding or displaying answer
  * random question
  * checking if the answer is correct
* **learning languages**: 
  * hiding or displaying translation
  * notes, examples

# Compatible readers (or partially compatible)
 * Calibre viewer (windows) https://manual.calibre-ebook.com/viewer.html Free, included in calibre, available as portable
 * Lithium (android) https://play.google.com/store/apps/details?id=com.faultexception.reader Free (pay ugrade available, for more themes), No ads.
 * Study Comfort (android) https://play.google.com/store/apps/details?id=com.studycomfort.app Free, No Ads
 
# Interactive Features
 

## footnotes
![how footnotes appear in Lithium](screenshots/FootnoteLithium.png)![how footnotes appear in Calibre Viewer](screenshots/FootnoteCalibreViewer.png)

## Quiz
Quizzes can be achieved through various coding design:
 * inline script
 * in Head script
 * in Head link to Misc script.js
### Forms: Button and Style
![Button](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/quiz.png)
### Forms: Fill the gap
![Button](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/multiQuiz.png)

## Hide / Display
Mainly used here to hide translations in multilingual ebooks, of for learning languages purposes.

Various coding strategies can be used and are tested in this epub
 * Jquery
 * querySelectorAll
 * InsertRule
 
### Using javascript and css Styles
![svg in epub](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/lg.png)

### Using title attribute
![svg in epub](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/title.png)

## Click Image Zone
## image map area
![ImageMapArea](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/imageArea.png)


# Layout, Font and characters Features
No fonts are included in this epub. This will allow to check which characters are correctly displayed.

## svg
No library is included in the epub.
![svg in epub](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/svg.png)

## mathml
No library is included in this epub.
### Compatible tools
 * Calibre viewer (windows)
 * [Lea Reader](https://play.google.com/store/apps/details?id=com.adilibre.leareader) (android)

![mathml in epub](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/mathml.png)

## vertical japanese
![vertical japanese](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/verticalJapanese.png)

## Ruby 
![ruby](https://github.com/fxpar/interactive-epub-checker/blob/master/screenshots/ruby.png)
(for zhuyin Fuhao / bopomofo)

