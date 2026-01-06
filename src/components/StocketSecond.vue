<!-- BenefitsSection.vue -->
<template>
    <section class="benefits-wrap">
        <div class="benefits">
            <article v-for="item in items" :key="item.title" class="benefit-card">
                <div class="icon">
                    <img :src="item.icon" :alt="item.title + ' icon'" />
                </div>

                <h3 class="title">{{ item.title }}</h3>
                <p class="desc">{{ item.description }}</p>

                <div class="phone">
                    <img :src="item.image" :alt="item.title" />
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import icon1 from "@/assets/EyeWhite.svg";
import icon2 from "@/assets/tabler_bell-filled.svg";
import icon3 from "@/assets/streamline-plump_wallet-solid.svg";

import img1 from "@/assets/Frame1686553415.svg";
import img2 from "@/assets/Frame1686553418.svg";
import img3 from "@/assets/Frame1686553419.svg";

const items = [
    {
        title: "Transparent Contributions",
        description:
            "Track deposits, cycles, and payouts in real time. No hidden records.",
        image: img1,
        icon: icon1,
    },
    {
        title: "Automated Reminders",
        description:
            "Never miss a contribution. Get smart reminders and payment notifications.",
        image: img2,
        icon: icon2,
    },
    {
        title: "Digital Wallet Integration",
        description:
            "Link your bank or wallet for instant deposits and withdrawal convenience.",
        image: img3,
        icon: icon3,
    },
];
</script>

<style scoped>
.benefits-wrap {
    width: 100%;
    padding: 40px 24px;
    background: #ffffff;
}

.benefits {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: 28px;
    grid-template-columns: repeat(3, 1fr);
}

.benefit-card {
    background: #ff7a00;
    color: #fff;
    border-radius: 26px;
    padding: 28px;
    padding-right: 170px;
    min-height: 360px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.icon {
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
}

.icon img {
    width: 44px;
    height: 44px;
    display: block;
}

.title {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 10px 0;

    white-space: nowrap;
    /* ✅ ALWAYS one line */
}

.desc {
    font-size: 14px;
    line-height: 1.55;
    margin: 0;
    max-width: 320px;
}

.phone {
    position: absolute;
    right: 12px;
    bottom: -14px;
    width: 215px;
    pointer-events: none;
}

.phone img {
    width: 100%;
    height: auto;
    display: block;
}

/* Responsive – image scales, title stays single line */
@media (max-width: 1024px) {
    .benefits {
        grid-template-columns: 1fr;
    }

    .benefit-card {
        padding-right: 150px;
        min-height: 340px;
    }

    .phone {
        width: 170px;
    }
}

@media (max-width: 480px) {
    .benefit-card {
        padding-right: 130px;
    }

    .phone {
        width: 170px;
    }
}
</style>
