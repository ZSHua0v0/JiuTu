<template>
  <div>
    <div class="FastRegister_banner_01">
      <div class="FastRegister_banner_01_box">
        <div class="stars">
          <div class="star" v-for="i in 6" :key="i"></div>
        </div>
        <div class="FastRegister_banner_01_content_box">
          <div style="margin-left: 4%">
            <h1>阿里云国际版</h1>
            <div class="dots" v-for="i in 15" :key="i"></div>
            <div class="contact-btn"><a :href="contactLinks.CustomerService" target="_blank">联系我们</a></div>
          </div>
          <div class="keywords">
            <span>轻量高防</span>
            <span>云数据库</span>
            <span>软件开发</span>
            <span>对象存储</span>
            <span>跨境电商</span>
            <span>数据分析</span>
          </div>
          <div class="alibaba-text">Alibaba Cloud</div>
        </div>
        <div class="stars">
          <div class="star" v-for="i in 6" :key="i"></div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="home_03_register">
      <div class="home_03_register__title">
        开户流程
        <span>/PROCESS</span></div>
      <div class="home_03_register__bg">
        <div class="h_03_r_b_content">
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img src="/assets/IMG/icons/information.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">联系客户经理</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>多种联系方式</div>
                <div>无障碍快捷沟通</div>
                <div class="connect_icons">
                  <div class="connect_icons__flex">
                    <img src="/assets/IMG/icons/tg_white_bg.png" alt="tg"/>
                    <img src="/assets/IMG/icons/phone_white_bg.png" alt="phone"/>
                    <img src="/assets/IMG/icons/facebook_white_bg.png" alt="facebook"/>
                    <img src="/assets/IMG/icons/wechat_white_bg.png" alt="wechat"/>
                    <img src="/assets/IMG/icons/email_white_bg.png" alt="email"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img src="/assets/IMG/icons/CustomerS.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">沟通需求配置</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>客户经理根据您的需求</div>
                <div>为您定制配置</div>
              </div>
            </div>
          </div>
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img style="width: 4.5rem;height: 4.5rem;margin-left: 6px;"
                                                               src=" /assets/IMG/icons/Register.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">极速开户</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>预付款项 直接开户</div>
                <div>支持全通道支付方式</div>
                <div class="connect_icons">
                  <div class="connect_icons__flex">
                    <img src=" /assets/IMG/icons/wechat_white_bg.png" alt="wechat"/>
                    <img src=" /assets/IMG/icons/paypal.png" alt="paypal"/>
                    <img src=" /assets/IMG/icons/corporate.png" alt="corporate"/>
                    <img src=" /assets/IMG/icons/usd.png" alt="usd"/>
                    <img src=" /assets/IMG/icons/usdt.png" alt="usdt"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="home_03_register_mobile">
      <div class="home_03_register__title">
        开户流程
        <span>/PROCESS</span></div>
      <div class="home_03_register_mobile__bg">
        <div class="register-section">
          <div class="register-box">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/information.png" alt="联系客户经理"/></div>
            </div>
            <div>
              <div class="register-title">联系客户经理</div>
              <div class="register-desc">多种联系方式<br/>无障碍快捷沟通</div>
              <div class="register-icons">
                <img src="/assets/IMG/icons/tg_white_bg.png" alt="Telegram"/>
                <img src="/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
                <img src="/assets/IMG/icons/facebook_white_bg.png" alt="Facebook"/>
                <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
                <img src="/assets/IMG/icons/email_white_bg.png" alt="Email"/>
              </div>
            </div>
          </div>
          <div class="register-box2">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/CustomerS.png" alt="沟通需求配置"/></div>
            </div>
            <div>
              <div class="register-title">沟通需求配置</div>
              <div class="register-desc">客户经理根据您的需求<br/>为您定制配置</div>
              <div class="register-graph">
                <div class="audio-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <!--            <img src="/public/assets/IMG/icons/bar-graph.png" alt="图表" />-->
              </div>
            </div>
          </div>
          <div class="register-box">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/Register.png" alt="极速开户"/></div>
            </div>
            <div>
              <div class="register-title">极速开户</div>
              <div class="register-desc">预付款项 直接开户<br/>支持全通道支付方式</div>
              <div class="register-icons">
                <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
                <img src="/assets/IMG/icons/paypal.png" alt="PayPal"/>
                <img src="/assets/IMG/icons/corporate.png" alt="Corporate"/>
                <img src="/assets/IMG/icons/usd.png" alt="USD"/>
                <img src="/assets/IMG/icons/usdt.png" alt="USDT"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="FastRegister_box_03">
      <!-- 标题 -->
      <div class="home_03_register__title" style="display: flex;justify-content: space-between">
        <div style="width: 40%">联系我们
          <span class="color_withe">/CONNECT</span>
        </div>
        <div class="switch-box">
          <span>我想与九途合作</span>
          <div>
            <label>
              <input class="toggle-checkbox" type="checkbox" v-model="isDarkMode">
              <div class="toggle-slot">
                <div class="sun-icon-wrapper">
                  <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div class="toggle-button"></div>
                <div class="moon-icon-wrapper">
                  <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
              </div>
            </label>

          </div>
        </div>
      </div>
      <div class="FastRegister_box_03_form_box">
        <div class="FastRegister_box_03_form_box_mini">
          <!-- 表单区域 -->
          <form v-if="isDarkMode" class="connect-form">
            <label>项目详情</label>
            <textarea rows="8"></textarea>

            <label>目标日期</label>
            <input type="text"/>

            <label>项目预算</label>
            <input type="text"/>

            <button type="submit">发送消息</button>
          </form>

          <form v-else class="connect-form">
            <label>Message</label>
            <textarea rows="8"></textarea>

            <button type="submit">发送消息</button>
          </form>
          <!-- 底部图标 -->
          <div class="contact-icons">
            <a href="/" target="_blank"><img src=" /assets/IMG/icons/email_white_bg.png" alt="jiutu"/></a>
            <a href="/" target="_blank"><img src=" /assets/IMG/icons/wechat_white_bg.png" alt="jiutu"/></a>
            <a href="/" target="_blank"><img src=" /assets/IMG/icons/tg_white_bg.png" alt="jiutu"/></a>
            <a href="/" target="_blank"><img src=" /assets/IMG/icons/phone_white_bg.png" alt="jiutu"/></a>
            <a href="/" target="_blank"><img src=" /assets/IMG/icons/facebook_white_bg.png" alt="jiutu"/></a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="FastRegister_box_03">
      <!-- 标题 -->
      <div class="home_03_register__title" style="display: flex;justify-content: space-between">
        <div style="width: 70%">联系我们
          <span class="color_withe">/CONNECT</span>
        </div>


      </div>
    </div>
  </div>
  <div v-if="isMobile" style="display:flex;justify-content: space-between;background: #feb001;padding-left: 5%;color:#000;padding-top: 5%;padding-right: 5%">
    <span>我想与九途合作</span>
    <label>
      <input class="toggle-checkbox" type="checkbox" v-model="isDarkMode">
      <div class="toggle-slot">
        <div class="sun-icon-wrapper">
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
        <div class="toggle-button"></div>
        <div class="moon-icon-wrapper">
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
        </div>
      </div>
    </label>
  </div>
  <div  v-if="isMobile">
    <div class="FastRegister_box_03_form_box">
      <div class="FastRegister_box_03_form_box_mini">
        <!-- 表单区域 -->
        <form v-if="isDarkMode" class="connect-form">
          <label>项目详情*</label>
          <textarea rows="8" placeholder="请描述您的项目，包括任何具体的要求、目标时间和应用场景。"></textarea>

          <label>目标日期*</label>
          <input type="text"/>

          <label>项目预算*</label>
          <input type="text"/>

          <button type="submit">发送消息</button>
        </form>

        <form v-else class="connect-form">
          <label>Message</label>
          <textarea rows="8"></textarea>

          <button type="submit">发送消息</button>
        </form>
        <!-- 底部图标 -->
        <div class="contact-icons">
          <a href="/" target="_blank"><img src=" /assets/IMG/icons/email_white_bg.png" alt="jiutu"/></a>
          <a href="/" target="_blank"><img src=" /assets/IMG/icons/wechat_white_bg.png" alt="jiutu"/></a>
          <a href="/" target="_blank"><img src=" /assets/IMG/icons/tg_white_bg.png" alt="jiutu"/></a>
          <a href="/" target="_blank"><img src=" /assets/IMG/icons/phone_white_bg.png" alt="jiutu"/></a>
          <a href="/" target="_blank"><img src=" /assets/IMG/icons/facebook_white_bg.png" alt="jiutu"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "阿里巴巴普惠体 2.0 105 Heavy";
  font-weight: 900;
  src: url("//at.alicdn.com/wf/webfont/21hPg9DVBP5E/SNXQ8JLAFfCA.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/21hPg9DVBP5E/x4Q9BbB8aBIW.woff") format("woff");
  font-display: swap;
}
a{
  text-decoration: none;
}
.FastRegister_banner_01 {
  width: 100%;
  height: 550px;
  background: url("/assets/IMG/backgrounds/FastRegister_banner_01.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: #fff;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
}

.FastRegister_banner_01_box {
  display: flex;
  justify-content: center;
  width: 75%;
  height: 100%;
  margin: 0 auto;
}

.FastRegister_banner_01_content_box {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.stars {
  display: flex;
  font-size: 20px;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
}

.star {
  background: url("/assets/IMG/icons/start.png") no-repeat;
  width: 2rem;
  height: 3rem;
  background-size: 100% 100%;
}

h1 {
  font-size: clamp(40px, 4.5vw, 8rem);
  font-weight: bold;
  margin: 20px 0 0 0;
  line-height: 1.2;
}

.dots {
  display: inline-block;
  border: none;
  background: white;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  margin-right: 0.7rem;
}

.contact-btn {
  width: 10rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background: url("/assets/IMG/icons/Fast_button.png") no-repeat;
  background-size: 100% 100%;
  color: #f90;
  border: none;
  padding-left: 1%;
  margin-top: 2%;
  font-size: clamp(14px, 1.2vw, 5rem);
  //padding: 10px 16px;
  font-weight: bold;
  cursor: pointer;
  display: block;
}
.contact-btn a{
  color: #f90;
}
.keywords {
  position: absolute;
  bottom: -20px;
  display: flex;
  width: 100%;
  padding: 0 6%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #333;
  z-index: 1;
  font-size: clamp(15px, 1.8vw, 300px);
}

.alibaba-text {
  position: absolute;
  bottom: clamp(-95px, calc(-95px + (1920px - 100vw) * 0.10), 0px);
  font-size: clamp(40px, 9.6vw, 400px);
  color: rgba(255, 255, 255, 0.36);
  font-weight: bold;
  z-index: 0;
  white-space: nowrap;
  font-family: "阿里巴巴普惠体 2.0 105 Heavy", sans-serif;
}

.home_03_register {
  margin: 8% auto 0 auto;
  width: 70%;
  height: clamp(200px, calc(200px + 10vh), 300px);
}

.home_03_register__title {
  font-size: clamp(24px, 2.2vw, 3rem);
  font-weight: 550;

}

.home_03_register__title span {
  margin-left: 2%;
  font-size: clamp(17px, 1.5vw, 3rem);
  color: #feb001;
  letter-spacing: 2px;
}

.home_03_register__bg {
  background: #feb001;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.h_03_r_b_content {
  display: flex;
  justify-content: center;
  gap: clamp(0rem, 5vw, 8rem);
}

.h_03_r_b_content__title__box {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.h_03_r_b_content__title__icons {
  background: white;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
}

.h_03_r_b_content__title__icons img {
  width: 100%;
  height: 100%;
}

.h_03_r_b_content__title__h2 {
  font-size: clamp(14px, 1.3vw, 2rem);
  height: 5rem;
  line-height: 5rem;
  white-space: nowrap;
}

.h_03_r_b_content__mini_box {
  display: flex;
  flex-direction: column; /* 竖排 */
  position: relative;
  padding: 15px;
  margin: 14% auto 0 auto;
  height: 53%;
  width: 105%;
}

.corner {
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: 2px solid white;
}

.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-top: none;
  border-left: none;
}

.mini_box_content {
  text-align: center;
}

.connect_icons__flex {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
}

.connect_icons__flex img {
  width: 3rem;
  height: 3rem;
  color: white;
}

.FastRegister_box_03 {
  margin: 8% auto 5% auto;
  width: 70%;
}

.switch-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #feb001;
}

.connect-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.connect-form label {
  font-size: 1.3rem;
  color: #000;
}

.connect-form textarea,
.connect-form input {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  resize: none;
}

.connect-form button {
  margin-top: 1%;
  background: white;
  color: #000;
  border: none;
  border-radius: 1rem;
  align-self: center;
  cursor: pointer;
  width: 20%;
  padding: 0.2rem 0;
  font-size: clamp(14px, 1vw, 2rem);
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  border-top: 1px solid white;
  padding-top: 1rem;
}

.FastRegister_box_03_form_box {
  background: #feb001;
  border-radius: 5px;
  padding: 1% 0;
}

.FastRegister_box_03_form_box_mini {
  width: 85%;
  margin: 0 auto;
}

.contact-icons img {
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  padding: 0.3rem;
}

.switch-box span {
  margin-left: 0;
  font-size: clamp(14px, 1.2vw, 3rem);
  color: #feb001;
  letter-spacing: 0.5px;
  border-bottom: 3px solid #feb001;
  text-align: center;
  font-weight: 400;
  line-height: 2;
  margin-top: -10px;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  font-size: 10px;
  position: relative;
  height: 3.5em;
  width: 7em;
  border: 0 solid transparent;
  border-radius: 10em;
  background-color: #b2b2b2;
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #ffbb52;
}

.toggle-button {
  transform: translate(0.3em, 0.25em);
  position: absolute;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: white;
  box-shadow: inset 0 0 0 0.75em white;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: white;
  box-shadow: inset 0 0 0 0.75em white;
  transform: translate(3.65em, 0.25em);
}

.sun-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: #ffbb52;
}

.sun-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 1;
  transform: translate(2em, 2em) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2.5, .46, .71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(2em, 2em) rotate(-15deg);
}


@media (max-width: 768px) {
  .FastRegister_banner_01 {
    background: url("/assets/IMG/backgrounds/FastRegister_01_2.jpg") no-repeat;
    background-size: 100% 100%;
    height: 280px;
  }

  .FastRegister_banner_01_box {
    display: none;
  }

  .home_03_register_mobile {
    margin: 12% auto 0 auto;
  }

  .home_03_register {
    display: none;
  }

  .home_03_register_mobile__bg {
    background: #feb001;
    padding: 1rem;
  }

  .register-box {
    background: #feb001;
    border: 2px solid white;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #000;
    display: flex;
    justify-content: left;
    gap: 10%;
  }


  .register-title {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .register-desc {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .register-icon-border {
    width: 6rem;
    height: 6rem;
    border: 2px dashed white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    //margin: 0 auto 0.5rem;
  }

  .register-icon {
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 50%;
    display: flex; /* 居中图标 */
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .register-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .audio-bars {
    display: flex;
    align-items: flex-end;
    height: 40px;
    gap: 15px;
  }

  .register-box2 {
    background: #feb001;
    border: 2px solid white;
    border-radius: 12px;
    padding: 1rem 1rem 0 1rem;
    margin-bottom: 1rem;
    color: #000;
    display: flex;
    justify-content: left;
    gap: 10%;
  }

  .audio-bars span {
    display: block;
    width: 7px;
    background: white;
    animation: bounce 1s infinite ease-in-out;
  }

  .audio-bars span:nth-child(1) {
    animation-delay: 0s;
  }

  .audio-bars span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .audio-bars span:nth-child(3) {
    animation-delay: 0.2s;
  }

  .audio-bars span:nth-child(4) {
    animation-delay: 0.3s;
  }

  .audio-bars span:nth-child(5) {
    animation-delay: 0.4s;
  }

  .audio-bars span:nth-child(6) {
    animation-delay: 0.5s;
  }

  .audio-bars span:nth-child(7) {
    animation-delay: 0.6s;
  }

  .audio-bars span:nth-child(8) {
    animation-delay: 0.7s;
  }

  @keyframes bounce {
    0%, 100% {
      height: 20%;
    }
    50% {
      height: 100%;
    }
  }


  .register-icons {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
  }

  .register-icons img {
    width: 35px;
    height: 35px;
  }

  .home_03_register__title {
    font-weight: 550;
    margin-left: 5%;
  }

  .color_withe {
    color: white !important;
  }

  .FastRegister_box_03 {
    margin: 0;
    width: 100%;
    background: #feb001;
  }
  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #ffbb52;
    border: 1px solid #fff;
  }
  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: white;
    box-shadow: inset 0 0 0 0.75em white;
    transform: translate(1.65em, 0.15em);
  }
  .toggle-slot {
    font-size: 10px;
    position: relative;
    height: 2.5em;
    width: 4em;
    border: 0 solid transparent;
    border-radius: 10em;
    background-color: #b2b2b2;
    transition: background-color 250ms;
  }
  .toggle-button {
    transform: translate(0.3em, 0.25em);
    position: absolute;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    background-color: white;
    box-shadow: inset 0 0 0 0.75em white;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
  }
  .connect-form label{
    font-size: 1rem;
    color: #000;
  }
  .FastRegister_box_03_form_box{
    background: #feb001;
    border-radius: 0;
    padding: 1% 0;
  }
  .FastRegister_box_03_form_box_mini{
    width: 90%;
    margin: 0 auto;
  }
  .connect-form button {
    margin-top: 5%;
    background: #fff;
    color: orange;
    font-weight: 600;
    border: none;
    border-radius: 1rem;
    align-self: center;
    cursor: pointer;
    width: 35%;
    padding: 0.2rem 0;
    font-size: clamp(15px, 1vw, 2rem);
  }
  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper{
    opacity: 1;
    transform: translate(0em, 1em) rotate(-10deg);
  }
  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper{
    opacity: 0;
    transform: translate(0em, 2em) rotate(0deg);
  }
  .moon-icon-wrapper{
    position: absolute;
    height: 3em;
    width: 3em;
    opacity: 0;
    transform: translate(0em, 2em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2.5, .46, .71);
  }
  .sun-icon-wrapper{
    position: absolute;
    height: 3em;
    width: 3em;
    right: 0;
    opacity: 1;
    transform: translate(0em, 2em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
  }
  .moon-icon{
    position: absolute;
    height: 3em;
    width: 3em;
    color: white;
  }
  .sun-icon{
    position: absolute;
    height: 3em;
    width: 3em;
    color: #ffbb52;
  }
}
</style>
<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {contactLinks as contactLinksRaw} from '../public/js/contact_link.js'

const contactLinks = contactLinksRaw
const isDarkMode = ref(true) // 默认勾选，暗黑模式
const isMobile = ref(false)

function checkIsMobile() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  // 初始化 class
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }

  // 监听变化
  watch(isDarkMode, (newVal) => {
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  // 监听屏幕尺寸
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

