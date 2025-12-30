<template>
    <nav class="navbar">
        <div class="container">
            <router-link class="nav-link me-5 logo_remove" to="/">
                <img src="../assets/main-logo.svg" alt="PockieSafe" />
            </router-link>

            <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </button>

            <ul :class="['nav-links', { show: isOpen }]">
                <li class="nav-item" @click="closeMenu">
                    <router-link class="nav-link" to="/stokvel">Stokvel</router-link>
                </li>
                <li class="nav-item" @click="closeMenu">
                    <router-link class="nav-link" to="/flexrand">FlexRand</router-link>
                </li>
                <li class="nav-item" @click="closeMenu">
                    <router-link class="nav-link" to="/security">Security</router-link>
                </li>
                <li class="nav-item" @click="closeMenu">
                    <router-link class="nav-link" to="/faq">FAQs</router-link>
                </li>

                <li v-if="isOpen" class="mobile-download">
                    <a href="#" class="download-btn google" @click="closeMenu">
                        <img src="../assets/googleplay.svg" alt="Get it on Google Play" />
                    </a>
                    <a href="#" class="download-btn apple" @click="closeMenu">
                        <img src="../assets/appstore.svg" alt="Download on the App Store" />
                    </a>
                </li>
            </ul>

            <div class="right-btns">
                <a href="#" role="button">
                    <img src="../assets/appstore.svg" alt="App Store" />
                </a>
                <a href="#" role="button">
                    <img src="../assets/googleplay.svg" alt="Google Play" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return { isOpen: false };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },
    },
};
</script>

<style scoped>
/* RESET */
ul {
    margin: 0;
    padding: 0;
}

/* NAV BAR BASE */
.navbar {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 1000;
}

/* IMPORTANT: make container behave on all widths */
.container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    padding: 8px 0px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* anchor dropdown */
    box-sizing: border-box;
}

/* NAV LINKS */
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
}

.nav-links li a {
    text-decoration: none;
    color: #222;
    font-size: 1rem;
    white-space: nowrap;
}

/* RIGHT BUTTONS */
.right-btns {
    display: flex;
    gap: 10px;
    align-items: center;
}

.right-btns img {
    height: 36px;
    /* helps reduce iPad squeeze */
}

/* HAMBURGER */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    padding: 8px;
}

.hamburger span {
    width: 26px;
    height: 3px;
    background: #222;
    transition: 0.3s;
}

/* Hamburger → X animation */
.hamburger span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* =========================
   ✅ TABLET FIX (iPad range)
   ========================= */
@media (max-width: 1100px) {
    .container {
        padding: 8px 80px;
        /* tighter padding */
    }

    /* remove big bootstrap margin that pushes things */
    .logo_remove {
        margin-right: 12px !important;
    }

    .nav-links {
        gap: 1.2rem;
        /* smaller gap fits iPad */
    }

    .nav-links li a {
        font-size: 0.95rem;
    }

    .right-btns img {
        height: 32px;
        /* smaller badges on iPad */
    }
}

/* ======================
   MOBILE STYLING
   ====================== */
@media (max-width: 974px) {
    .hamburger {
        display: flex;
    }

    .right-btns {
        display: none;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 16px 18px;
        background: #fff;
        border-bottom: 1px solid #eee;
        text-align: left;
        box-sizing: border-box;
    }

    .nav-links.show {
        display: flex;
        animation: fadeDown 0.25s ease;
    }

    @keyframes fadeDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .container {
        padding: 8px 15px;
        /* tighter padding */
    }

    .mobile-download {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 8px;
    }
}
</style>
