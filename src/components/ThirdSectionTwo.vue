<template>
    <section class="howitworks">
        <div class="wrap">
            <h3 class="title">How PockieSafe Works</h3>

            <!-- timeline -->
            <div class="timeline">
                <div class="line"></div>

                <div class="step-dot" style="left: 0%;">
                    <span>1</span>
                </div>
                <div class="step-dot" style="left: 33.333%;">
                    <span>2</span>
                </div>
                <div class="step-dot" style="left: 66.666%;">
                    <span>3</span>
                </div>
            </div>

            <!-- cards -->
            <div class="cards">
                <div class="card">
                    <div class="card-top">
                        <img class="badge" src="../assets/1.svg" alt="1" />
                        <img class="icon" src="../assets/Rectangle.svg" alt="phone" />
                    </div>
                    <div class="card-body">
                        <h5>Download the App</h5>
                        <p>Available on Play Store and App Store</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-top">
                        <img class="badge" src="../assets/2.svg" alt="2" />
                        <img class="icon" src="../assets/RectangleTwo.svg" alt="kyc" />
                    </div>
                    <div class="card-body">
                        <h5>Verify Your KYC</h5>
                        <p>Quick and secure onboarding process</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-top">
                        <img class="badge" src="../assets/3.svg" alt="3" />
                        <img class="icon" src="../assets/RectangleThree.svg" alt="save" />
                    </div>
                    <div class="card-body">
                        <h5>Start Saving</h5>
                        <p>Join a Stokvel or open FlexRand</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.howitworks {
    padding: 96px 0;
}

.wrap {
    width: min(1100px, 92%);
    margin: 0 auto;
}

.title {
    text-align: center;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    font-weight: 800;
    letter-spacing: 0.2px;
    line-height: 1.2;
    margin: 0 0 28px;
    color: #0f0f14;
}

/* Timeline */
.timeline {
    position: relative;
    height: 54px;
    margin: 0 auto 28px;
    width: 100%;
}

.line {
    position: absolute;
    left: 0;
    right: 0;
    top: 26px;
    height: 2px;
    background: #3f3df2;
    /* match the screenshot purple line */
    border-radius: 999px;
    opacity: 0.85;
}

.step-dot {
    position: absolute;
    top: 14px;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: #f1f1ff;
    border: 2px solid #d9d9ff;
    display: grid;
    place-items: center;
}

.step-dot span {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #3f3df2;
}

/* Cards */
.cards {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.card {
    width: 340px;
    background: #F9F9FB;
    border-width: 0cap;
    border-radius: 16px;
    padding: 16px 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.card-top {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    flex-shrink: 0;
}

.badge {
    width: 22px;
    height: 22px;
}

.icon {
    width: 30px;
    height: 60px;
    object-fit: contain;
}

.card-body {
    padding: 12px;
}

.card-body h5 {
    margin: 0px 0 2px;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    font-weight: 800;
    font-size: 15px;
    line-height: 20px;
    color: #0f0f14;
}

.card-body p {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
    color: #6f6f7b;
    letter-spacing: 0.2px;
}

/* Responsive */
@media (max-width: 980px) {
    .cards {
        gap: 18px;
    }

    .card {
        width: min(520px, 100%);
    }
}

@media (max-width: 520px) {
    .timeline {
        height: 46px;
        display: none;
    }

    .line {
        top: 22px;
    }

    .step-dot {
        top: 10px;
    }
}
</style>
