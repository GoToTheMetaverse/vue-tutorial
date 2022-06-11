<template>
  <h1>MotionDemoView</h1>

  <div>
    <h2>direction 옵션</h2>
    <div class="section"></div>
    <div class="section-top">⬇️ #box-dir-normal : normal</div>
    <div id="box-dir-normal" class="box"></div>
    <div class="section-top">⬇️ #box-dir-reverse : reverse</div>
    <div id="box-dir-reverse" class="box"></div>
    <div class="section-top">⬇️ #box-dir-alternate : alternate</div>
    <div id="box-dir-alternate" class="box"></div>
  </div>

  <div>
    <h2>⬇️ 버튼으로 재생 / 정지</h2>
    <div class="section">
      <div>box-button :</div>
      <button @click="onClickPlay">재생</button>
      <button @click="onClickStop">정지</button>
    </div>
    <div id="box-button" class="box"></div>
    <div class="section"></div>
  </div>

  <div>
    <h2>⬇️ 애니메이션 이중 재생</h2>
    <div>의도하지 않은 움직임을 보입니다.</div>
    <div class="section">
      <div>box-dual :</div>
      <button @click="onClickDual1">재생1</button>
      <button @click="onClickDual2">재생2</button>
    </div>
    <div id="box-dual" class="box"></div>
    <div class="section"></div>
  </div>

  <div>
    <h2>⬇️ 애니메이션 동시에 하나만 재생 (끝날때까지 기다림)</h2>
    <div>
      애니며이션 전환시 순간이동은 하지 않지만 끝날때 까지 기다려야해서 동작이
      느립니다.
    </div>
    <div class="section">
      <div>box-playandstop :</div>
      <button @click="onClickPlayAndStop1">재생1</button>
      <button @click="onClickPlayAndStop2">재생2</button>
    </div>
    <div id="box-playandstop" class="box"></div>
    <div class="section"></div>
  </div>

  <div>
    <h2>⬇️ 애니메이션 동시에 하나만 재생 (즉시 전환)</h2>
    <div>
      최대한 애니메이션 전환시 순간이동이 적도록 ㄱ현했습니다.<br />처음위치로
      이동하는 코드가 추가됨
    </div>
    <div class="section">
      <div>box-playandstop-v2 :</div>
      <button @click="onClickPlayAndStopV21">재생1</button>
      <button @click="onClickPlayAndStopV22">재생2</button>
    </div>
    <div id="box-playandstop-v2" class="box"></div>
    <div class="section"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { animate } from "motion";

onMounted(() => {
  animate(
    "#box-dir-normal",
    { x: [0, 50] },
    {
      duration: 1,
      repeat: Infinity,
    }
  );
  animate(
    "#box-dir-reverse",
    { x: [0, 50] },
    {
      duration: 1,
      repeat: Infinity,
      direction: "reverse",
    }
  );
  animate(
    "#box-dir-alternate",
    { x: [0, 50] },
    {
      duration: 1,
      repeat: Infinity,
      direction: "alternate",
    }
  );
});

let control = null;
const onClickPlay = async () => {
  control = animate(
    "#box-button",
    { x: [0, 50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

const onClickStop = () => {
  control.stop();
};

// 이중 재생
const onClickDual1 = () => {
  animate(
    "#box-dual",
    { x: [0, 50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

const onClickDual2 = () => {
  animate(
    "#box-dual",
    { y: [0, -50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

// 한번에 한개씩만 재생
let control_playandstop = null;
const onClickPlayAndStop1 = async () => {
  if (control_playandstop != null) {
    await control_playandstop.finished;
    control_playandstop = null;
  }

  control_playandstop = animate(
    "#box-playandstop",
    { x: [0, 50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

const onClickPlayAndStop2 = async () => {
  if (control_playandstop != null) {
    await control_playandstop.finished;
    control_playandstop = null;
  }

  control_playandstop = animate(
    "#box-playandstop",
    { y: [0, -50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

// 애니메이션 즉시 전환
let control_playandstop_v2 = null;
const onClickPlayAndStopV21 = async () => {
  if (control_playandstop_v2 != null) {
    control_playandstop_v2.stop();

    await animate(
      "#box-playandstop-v2",
      { x: [0], y: [0] },
      {
        duration: 0.3, // 빠르게 재자리로
      }
    ).finished;
  }

  control_playandstop_v2 = animate(
    "#box-playandstop-v2",
    { x: [0, 50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};

const onClickPlayAndStopV22 = async () => {
  if (control_playandstop_v2 != null) {
    control_playandstop_v2.stop();

    await animate(
      "#box-playandstop-v2",
      { x: [0], y: [0] },
      {
        duration: 0.3, // 빠르게 재자리로
      }
    ).finished;
  }

  control_playandstop_v2 = animate(
    "#box-playandstop-v2",
    { y: [0, -50, 0] },
    {
      duration: 1,
      repeat: 3,
    }
  );
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
  margin: 0 auto;
}

.section {
  margin-top: 50px;
  margin-bottom: 50px;
}
.section-top {
  margin-top: 20px;
}
</style>
