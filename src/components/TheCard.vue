<template>
  <div
    :class="[
      'hero-card-headings',
      hasSwiperControls && 'hero-card-headings--has-swiper-controls',
      hasVideoControls && 'hero-card-headings--has-video-controls',
    ]"
  >
    <span v-if="fashionShowCountdown" class="hero-card-headings__countdown">
      <span v-if="fashionShowCountdown.days > 0">
        {{ fashionShowCountdown.days }} {{ "prspa_days" }}
      </span>
      <span> {{ fashionShowCountdown.hours }} {{ "prspa_hours" }} </span>
      <span> {{ fashionShowCountdown.minutes }} {{ "prspa_minutes" }} </span>
      <span> {{ fashionShowCountdown.seconds }} {{ "prspa_seconds" }} </span>
    </span>
    <span v-else-if="kicker.text" class="hero-card-headings__kicker">
      <span class="hero-card-headings__mobile-text-element">
        {{ kicker.text.mobile }}
      </span>
      <span class="hero-card-headings__desktop-text-element">
        {{ kicker.text.desktop }}
      </span>
    </span>

    <component
      v-if="title.text"
      :is="title.headerTags || 'h2'"
      class="hero-card-headings__title"
    >
      <span class="hero-card-headings__mobile-text-element">
        {{ title.text.mobile }}
      </span>
      <span class="hero-card-headings__desktop-text-element">
        {{ title.text.desktop }}
      </span>
    </component>

    <span v-if="description.text" class="hero-card-headings__description">
      <span class="hero-card-headings__mobile-text-element">
        {{ description.text.mobile }}
      </span>
      <span class="hero-card-headings__desktop-text-element">
        {{ description.text.desktop }}
      </span>
    </span>

    <div
      v-if="hasValidCta"
      :class="[
        'hero-card-headings__cta-wrapper',
        isLinkCtaOnly && 'hero-card-headings__cta-wrapper--link-cta',
      ]"
    >
      <HeroButton v-for="(cta, idx) in ctaList" :config="cta" :key="idx">
        {{ cta.label }}
      </HeroButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  kicker: any;
  title: any;
  description: any;
  ctaList?: any;
  positioningDesktop?: any;
  positioningMobile?: any;
  hasSwiperControls?: boolean;
  hasVideoControls?: boolean;
  countdownColor?: any;
  isFashionShowVertical?: boolean;
  fashionShowCountdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null;
}>();

const hasValidCta = computed(() => {
  const hasMandatoryData = props.ctaList?.some((cta: any) => {
    const hasLabel = !!cta.label && cta.label.trim().length > 0;
    const hasUrlData = !!(cta.path || cta.sku || cta.categoryPath);
    return hasLabel && hasUrlData;
  });
  return hasMandatoryData;
});

const isLinkCtaOnly = computed(() => {
  return props.ctaList.every((cta: any) => cta.style === "standard");
});

const getPositioningConfig = (positioning: any) => {
  const config = {
    horizontalAlign: "center",
    paddingBottom: "none",
    textAlign: "center",
  };

  const horizontalAlign = positioning?.split(" ")?.[0] || "";
  const isLeft = horizontalAlign === "alignLeft";
  const isRight = horizontalAlign === "alignRight";
  const isCenter = ["alignCenter", "alignMiddle"].includes(horizontalAlign);

  if (isLeft) {
    config.horizontalAlign = "flex-start";
    config.textAlign = "left";
  }
  if (isRight) {
    config.horizontalAlign = "flex-end";
    config.textAlign = "right";
  }
  if (isCenter || props.isFashionShowVertical) {
    config.horizontalAlign = "center";
    config.textAlign = "center";
  }

  return config;
};

const positionConfigDesktop = computed(() => {
  return getPositioningConfig(props.positioningDesktop);
});
const positionConfigMobile = computed(() => {
  return getPositioningConfig(props.positioningMobile);
});
const positionConfigDesktopAlign = computed(() => {
  return positionConfigDesktop.value.horizontalAlign;
});
const positionConfigMobileAlign = computed(() => {
  return positionConfigMobile.value.horizontalAlign;
});
const positionConfigDesktopPaddingBottom = computed(() => {
  return positionConfigDesktop.value.paddingBottom;
});
const positionConfigMobilePaddingBottom = computed(() => {
  return positionConfigMobile.value.paddingBottom;
});
const positionConfigDesktopTextAlign = computed(() => {
  return positionConfigDesktop.value.textAlign;
});
const positionConfigMobileTextAlign = computed(() => {
  return positionConfigMobile.value.textAlign;
});

const COLOR_WHITE = "#ffffff";

const countdownColorDesktop = computed(() => {
  return props.countdownColor?.desktop || COLOR_WHITE;
});
const countdownColorMobile = computed(() => {
  return props.countdownColor?.mobile || COLOR_WHITE;
});

const kickerColorDesktop = computed(() => {
  return props.kicker.color?.desktop || COLOR_WHITE;
});
const kickerColorMobile = computed(() => {
  return props.kicker.color?.mobile || COLOR_WHITE;
});
const kickerFontSizeDesktop = computed(() => {
  return (props.kicker.fontSize?.desktop || "12") + "px";
});
const kickerFontSizeMobile = computed(() => {
  return (props.kicker.fontSize?.mobile || "12") + "px";
});

const titleColorDesktop = computed(() => {
  return props.title.color?.desktop || COLOR_WHITE;
});
const titleColorMobile = computed(() => {
  return props.title.color?.mobile || COLOR_WHITE;
});
const titleFontSizeDesktop = computed(() => {
  return (props.title.fontSize?.desktop || "24") + "px";
});
const titleFontSizeMobile = computed(() => {
  return (props.title.fontSize?.mobile || "20") + "px";
});

const descriptionColorDesktop = computed(() => {
  return props.description.color?.desktop || COLOR_WHITE;
});
const descriptionColorMobile = computed(() => {
  return props.description.color?.mobile || COLOR_WHITE;
});
const descriptionFontSizeDesktop = computed(() => {
  return (props.description.fontSize?.desktop || "14") + "px";
});
const descriptionFontSizeMobile = computed(() => {
  return (props.description.fontSize?.mobile || "14") + "px";
});
const descriptionLineHeightDesktop = computed(() => {
  return (props.description.lineHeight?.desktop || "18") + "px";
});
const descriptionLineHeightMobile = computed(() => {
  return (props.description.lineHeight?.mobile || "18") + "px";
});
</script>
