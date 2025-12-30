<template>
    <div class="section_two">
        <!-- Stokvel Card -->
        <div class="feature_card">
            <div class="feature_left">
                <div class="feature_head">
                    <img class="icon" src="../assets/group_savings.svg" alt="Stokvel icon" />
                    <h4>Stokvel</h4>
                </div>

                <p class="sub_text">
                    Create or join savings groups with friends and manage contributions transparently.
                </p>

                <a class="learn" href="#">Learn More →</a>
            </div>

            <div class="feature_right">
                <img class="feature_image" src="../assets/Africanfemalecasualclothes.svg" alt="Group illustration" />
            </div>
        </div>

        <!-- FlexRand Card -->
        <div class="feature_card">
            <div class="feature_left">
                <div class="feature_head">
                    <img class="icon" src="../assets/walet.svg" alt="Wallet icon" />
                    <h4>FlexRand</h4>
                </div>

                <p class="sub_text">
                    Flexible savings that let you deposit or withdraw anytime, without penalties.
                </p>

                <a class="learn" href="#">Learn More →</a>
            </div>

            <div class="feature_right">
                <img class="feature_image_right" src="../assets/flexrand_wallet.svg" alt="Wallet illustration" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section_two {
    display: flex;
    gap: 30px;
    padding: 96px 17%;
}

/* Card */
.feature_card {
    flex: 1;
    background: #5856d6;
    border-radius: 20px;
    padding: 32px;
    display: flex;
    align-items: stretch;
    color: #fff;
    height: 280px;
    overflow: hidden;
    position: relative;
}

/* Left content */
.feature_left {
    max-width: 58%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    z-index: 2;
    position: relative;
}

.feature_head {
    display: flex;
    align-items: center;
    gap: 12px;
}

.feature_left h4 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
}

/* ✅ TEXT WIDTH CONTROL */
.sub_text {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.95;
    width: 85%;
    /* ✅ BIG SCREENS */
    max-width: none;
    margin: 0;
}

.learn {
    margin-top: auto;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    opacity: 0.95;
}

/* Right image */
.feature_right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 1;
    pointer-events: none;
}

.icon {
    width: 28px;
    height: 28px;
}

.feature_image {
    display: block;
    height: 215px;
    max-width: 260px;
    object-fit: contain;
    position: relative;
    right: -6px;
    bottom: -20px;
    transform: none;
}

.feature_image_right {
    display: block;
    height: 215px;
    max-width: 260px;
    object-fit: contain;
    position: relative;
    right: -6px;
    bottom: -8px;
    transform: none;
}

/* Responsive */
@media (max-width: 1200px) {
    .section_two {
        padding: 96px 10%;
    }
}

@media (max-width: 990px) {
    .section_two {
        padding: 64px 20px;
        flex-direction: column;
    }

    .feature_card {
        height: 300px;
    }

    .feature_left {
        max-width: 100%;
    }

    /* ✅ MOBILE TEXT WIDTH */
    .sub_text {
        width: 60%;
    }

    .feature_right {
        width: 55%;
    }

    .feature_image {
        height: 175px;
        right: -4px;
        bottom: -4px;
        transform: translateX(25%);
    }

    .feature_image_right {
        height: 175px;
        right: -4px;
        bottom: -4px;
        transform: translateX(5%);
    }
}
</style>
