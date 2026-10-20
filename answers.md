# Answers

Answer the questions below in this file, under each question. Put screenshots in
a `screenshots/` folder and link them from your answers.

## 1. Challenges and dilemmas

List at list 2 challenges or dilemmas that you faced while building the design in Part 1,
and how you decided to solve them?

**Answer:**
1. **Mobile Menu Animation:** The assignment instructions didn't specify exactly how the mobile menu should animate when opening. I researched a few different animation options (like sliding in from the side or dropping down). Ultimately, I decided to implement a fade-in/fade-out effect using `opacity` and `visibility`, because I felt it looked the cleanest and provided the best user experience.
2. **Content Link Destinations:** The text in the main content area included several hyperlinks, and I had a dilemma about where to route them. I considered finding specific, in-depth articles or creative resources for each technical term. In the end, I decided to go with the clear and boring option: I just linked them all directly to their respective Hebrew Wikipedia pages, keeping things simple and aligned with the assignment's baseline.

## 2. Box model

Build the `.hello-world` example from the lesson 1 "CSS Box Model" slides, exactly as it appears
there, on a new page of your website. This page is only for answering questions
2 and 4, so it can be a temporary file, and you don't need to submit it.

Inspect the element with your browser's devtools.
Enable and disable `box-sizing: border-box;` and inspect the size of the element.
What is the total width, and why? Explain in detail.

**Answer:**

When `box-sizing: border-box;` is **disabled** the total width of the element is **114px**.

When `box-sizing: border-box;` is **enabled** the total width of the element is exactly **100px**.

## 3. The viewport

Open the website on a mobile browser, or in the mobile view of Chrome's
devtools, then delete this line from the `<head>` of `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

What happens to your page? What does
this line tell the browser, and why does removing it affect your mobile design?

**Answer:**
When this line is removed, the mobile page design breaks completely. The layout shrinks to look like a tiny, zoomed-out version of the desktop site, making the text very hard to read and the whole menu logic returns to the desktop option.