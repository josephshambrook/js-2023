<script type="ts">
  import InfoBoxStyles from "@styles/components/InfoBox.module.scss";
</script>

<section class={InfoBoxStyles.infobox}>
  {#if $$slots.icon}
    <!--
      The icon slot is optional, but we want to wrap the slot
      in a span to be styled
    -->
    <span class={InfoBoxStyles.icon}><slot name="icon" /></span>
  {/if}

  <slot name="title" />
  <slot />
</section>
