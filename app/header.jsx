export default function Header() {
  return (
    <header class="bg-gray-100 flex justify-center">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center gap-6">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <h2 class="text-3xl font-bold sm:text-4xl">Fishcast</h2>
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/weather"
                  >
                    {" "}
                    Weather{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Locations{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Reports{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/about"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
