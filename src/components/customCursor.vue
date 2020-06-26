<template>
    <div class="cursor-container">
        <div class="cursor"></div>
        <div class="cursor-follower"></div>
    </div>
</template>

<script>
import { TweenMax } from 'gsap/all'

export default {
    name: 'customCursor',
    mounted() {
        // CURSOR
        const cursor = document.getElementsByClassName('cursor')[0],
        follower = document.getElementsByClassName('cursor-follower')[0]

        console.log(cursor, follower)

        let posX = 0,
            posY = 0

        let mouseX = 0,
            mouseY = 0

        TweenMax.to({}, 0.020, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 12,
                top: posY - 12
                }
            })

            TweenMax.set(cursor, {
                css: {
                left: mouseX,
                top: mouseY
                }
            })
        }
        })

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX
            mouseY = e.clientY
        })

        let links = document.getElementsByClassName('link')
        links = Array.from(links)

        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                console.log('running')
                cursor.classList.add('active')
                follower.classList.add('active')
            })
            link.addEventListener('mouseleave', function() {
                cursor.classList.remove('active')
                follower.classList.remove('active')
            })
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

// CURSOR
.cursor {
    position: fixed;
    background-color: $white;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    z-index: 1;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: scale(1);

    &.active {
        opacity: 1;
        transform: scale(0);
    }

    &.menu-active {
        opacity: 1;
        transform: scale(0);
    }

    &.hovered {
        opacity: 1;
    }
}

.cursor-follower {
    position: fixed;
    border:1px solid $white;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    z-index: 1;
    transition: 0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity, 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) background;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: translate(2px, 2px);
    background: $white;
    mix-blend-mode: exclusion;
    //overflow: hidden;

    // &.active {
    //     opacity: 1;
    //     transform: scale(3);
    // }

    &.menu-active {
        opacity: 1;
        transform: scale(3);
    }

    &.hovered {
        opacity: 1;
    }

    &.active{
        transform: scale(2);
        margin:0 auto;
        border-radius: 52% 48% 70% 30% / 41% 47% 53% 59%;
        animation:bubble 7s ease-in-out infinite;
    }
}

@keyframes bubble {
    0% { border-radius: 47% 53% 66% 34% / 48% 39% 61% 52%; }
    20% { border-radius: 38% 62% 41% 59% / 65% 44% 56% 35%; }
    40% { border-radius: 57% 43% 32% 68% / 56% 58% 42% 44%; }
    60% { border-radius: 38% 62% 63% 37% / 33% 36% 64% 67%; }
    80% { border-radius: 61% 39% 51% 49% / 53% 62% 38% 47%; }
    100% { border-radius: 47% 53% 66% 34% / 48% 39% 61% 52%; }
}

</style>