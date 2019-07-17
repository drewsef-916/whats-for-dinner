<template>
    <div class="container">
        <h3>About What's For Dinner</h3>
        <p>
            What's for dinner is a web app designed to make it easy to think of meals 
            to have for dinner (or luncn, or breakfast, or linner) every week. You can search
            for recipes by name or by recipes you haven't had in a while, as well as add new ones!
            If you like the logo there at the top of the page, you can thank the talented Sarah Moore
            and her top-notch design skills.
        </p>
        <h4>FAQ</h4>
        <h5>Is this an app?</h5>
        <p>
            Kind of. It's a web application which utilizes something called service workers. 
            These service workers make it possible for you to use the app offline after you've established 
            an initial connection with the website. It was designed to feel very app-like. 
        </p>
        <h5>Do I have to type out that whole url every time I want to use this thing?</h5>
        <p>
            Fortunately not! If you tap the share button on the menu bar of your browser, 
            there should be an "Add to Home Screen" option. Now you can access the web app 
            just like any other app from the app store. 
        </p>
        <h5>What other cool features should I know about?</h5>
        <ul>
            <li>Within an individual recipe page, you can cross out recipe steps as you complete them.</li>
            <li>Use the search icon in the nav bar to search for recipes. The search matches fill in as you type.</li>
            <li>
                Tap the "I ate this today" button at the bottom of an individual recipe page to log today's date as the last time you 
                had that recipe. This helps you search for meals by date eaten (calendar icon) later.
            </li>
        </ul>
        <h5>This site is really fast!</h5>
        <p>That wasn't a question, but thanks!</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    ul {
        padding-left: 0;
    }
    li {
        margin-bottom: 1rem;
    }

</style>