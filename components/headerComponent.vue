<template>
    <div class="header-container">
        <div class="toggle-background">
            <span class="arrow"></span>
        </div>
        <div>
            <fa icon="search" class="icon has-menu" @click="showMenu()"/>
            <div class="search-menu menu-toggle">
                <input type="text" placeholder="Find a recipe">
            </div>
        </div>
        <div>
            <fa icon="sort" class="icon has-menu" @click="showMenu()"/>
            <div class="sort-menu menu-toggle">
                <p>Sort option 1</p>
                <p>Sort option 2</p>
                <p>Sort option 3</p>
                <p>Sort option 4</p>
            </div>
        </div>
        <nuxt-link to="/">
            <img class="logo" src="~/assets/wfd-logo.png"/>
        </nuxt-link>
        <div>
            <fa icon="calendar-day" class="icon has-menu" @click="showMenu()"/>
            <div class="calendar-menu menu-toggle">
                <p>More than 2 weeks ago</p>
                <p>More than a month ago</p>
                <p>More than 6 weeks ago</p>
            </div>
        </div>
        <div>
            <nuxt-link to="/newRecipe">
                <fa icon="plus" class="icon"/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showMenu: function() {
            // const currentTarget = event.target;
            console.log('hello');
            // const triggers = document.querySelectorAll('div > .has-menu');
            // const background = document.querySelector('.toggle-background');

            // console.log(triggers);

            // currentTarget.classList.add('.toggle-click');
            // setTimeout(() => {
            //     currentTarget.classList.add('.toggle-click-active');
            // }, 150)
        }
    }
}
</script>

<style scoped>
    .header-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        align-items: center;
        height: 15vh;
        width: 100vw;
        border: 1px solid black;
        background: #fff;
        position: fixed;
        top: 0;
        margin-bottom: 15vh;
    }

    .logo {
        max-width: 100px;
    }

    .icon {
        font-size: 1.5rem;
        color: black;
    }

    /* .menu-toggle {
        background-color: whitesmoke;
        display: none;
    } */



    .menu-toggle {
        opacity: 0;
        position: absolute;
        overflow: hidden;
        padding: 20px;
        top: -20px;
        border-radius: 2px;
    }

     .toggle-background {
        width: 100px;
        height: 100px;
        position: absolute;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
        transition: all 0.3s, opacity 0.1s, transform 0.2s;
        transform-origin: 50% 0;
        opacity:0;
    }

    .toggle-click {
        display: block;
    }

    .toggle-click-active {
        opacity: 1;
    }

    
</style>