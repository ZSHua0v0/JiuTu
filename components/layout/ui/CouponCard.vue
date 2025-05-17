<template>
  <div class="coupon-card">
    <div class="text">
      <div class="line line_margin">满$<span class="highlight">{{ amount }}</span></div>
      <div class="line line_margin2">减$<span class="highlight">{{ discount }}</span></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  amount: Number,
  discount: Number
})
</script>

<style scoped>
.coupon-card {
  position: relative;
  width: 150px;
  height: 150px;
  background: url("/assets/IMG/icons/CouponCard.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  overflow: hidden;
}

.text .line {
  font-size: clamp(1rem ,1vw,2rem);
  line-height: 1.5;
}

.text .highlight {
  font-size: clamp(1rem ,1.7vw,2rem);
  font-weight: bold;
}

/* 弧线通用 */
.curve {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 6px solid transparent;
  border-top: 6px solid black;
  border-right: 6px solid black;
  border-radius: 50%;
  opacity: 0.8;
}

/* 顶部弧线旋转、偏移 */
.top-curve {
  top: -40px;
  right: -30px;
  transform: rotate(45deg);
}

/* 底部弧线旋转、偏移 */
.bottom-curve {
  bottom: -40px;
  left: -30px;
  transform: rotate(225deg);
}
.line_margin{
  position: absolute;
  left: 10%;
  top: 24%;
}
.line_margin2{
  position: absolute;
  left: 40%;
  top: 46%;
}
@media (max-width: 768px) {
  .coupon-card{
    width: 70px;
    height: 70px;
  }
  .text .line{
    font-size: clamp(0.6rem, 1vw, 2rem);
    line-height: 1.5;
  }
  .text .highlight {
    font-size: clamp(0.9rem, 1.7vw, 2rem);
    font-weight: bold;
  }
}
</style>
