<template>
  <div class="block-content">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
        <div class="text-center lg:text-right">
          <div class="mt-6 mb-3 font-bold text-6xl text-900">
            {{ $t("error.notFound.title") }}
          </div>
          <p class="text-700 text-3xl mt-0 mb-6">
            {{ $t("error.notFound.message") }}
          </p>
          <button class="p-button p-component p-button-outlined" type="button" aria-label="Go back to home page" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
            <span class="p-button-label" data-pc-section="label">
              {{ $t("error.notFound.button") }}
            </span>
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root">
            </span>
          </button>
        </div>
        <div>
          <img src="../assets/404-rocket.png" alt="Image" class="w-full md:w-28rem" />
        </div>
      </div>
    </div>
  </div>
</template>