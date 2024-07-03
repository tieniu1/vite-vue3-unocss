<template>
  <section class="mt-4">
    <div
      class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4"
    >
      <div class="bg-blue-500 text-white p-4 rounded">Item 1</div>
      <div class="bg-green-500 text-white p-4 rounded">Item 2</div>
      <div class="bg-red-500 text-white p-4 rounded">Item 3</div>
      <div class="bg-yellow-500 text-white p-4 rounded">Item 4</div>
      <div class="bg-purple-500 text-white p-4 rounded">Item 5</div>
      <div class="bg-pink-500 text-white p-4 rounded">Item 6</div>
    </div>
  </section>
  <section class="mt-4 bg-pink-100 p-10">
    <div class="max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-50 w-full md:w-[193px] object-bottom md:object-center object-cover align-middle"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt=""
          />
        </div>
        <div class="p-8">
          <p class="uppercase text-sm text-indigo-500 font-semibold">Company retreats</p>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Incredible accommodation for your team</a
          >
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some
            sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-4">
    <button class="bg-violet-500 hover:bg-violet-600">save changes</button>
  </section>
</template>

<style lang="less" scoped></style>
