# Frontend Documentation

## Leveraging Next.js for Building Large, SEO-Friendly Websites

Next.js provides a powerful solution for building large, SEO-friendly websites. By leveraging its capabilities, developers can create fast, scalable websites that rank well in search engine results and attract wider audiences.

### Problem

Developing a vast and search-engine-optimized (SEO) website can be challenging, especially with frameworks like React, which initially lacked inherent SEO support. This could hamper visibility and reach for a massive website.

### Solution

Utilizing Next.js, a React-based framework built for server-side rendering (SSR) and static site generation (SSG), can effectively address this issue. Let's explore how:

Next.js extends React by offering built-in functionalities like:

- **Server-side rendering (SSR):** Pre-renders pages on the server for initial load, enhancing SEO and improving perceived performance.
- **Static site generation (SSG):** Generates static HTML pages at build time, ensuring lightning-fast loading and optimal SEO indexing.
- **Hybrid rendering:** Combines SSR and SSG for dynamic content while maintaining SEO benefits.
- **Automatic code splitting:** Breaks down the codebase into smaller chunks, accelerating page loads.
- **Data fetching:** Simplifies data acquisition for both server-side and client-side rendering.
- **Built-in routing and API functionalities:** Streamlines navigation and server-side communication.

### How to run the website in DEV mode

**Prerequisites:**

- **Node.js:** Ensure you have Node.js version 20 or above installed. Download it from the official website: Image of Node.js website download page: [https://nodejs.org/](https://nodejs.org/)
- **`npm` and `pnpm`:** You'll need a package manager to install Next.js. `npm` is included with Node.js. You should also install `pnpm` which is the package manager used in the project that have useful features such as symbolic linking directories instead of copies them. This feature increase the installation spead and effecient handling of sotrage space usage.
- You could use Volta.js which is a tool to manage versions of node, npm, and other tools. `nvm` could also be used.

**Steps to run the app:**

1. Clone the repo and access the source code:
   - `git clone <repo-link>`
   - The main goal is to have the code, a less common way it to get the code using a USB stick or any other storage devices or file sharing services.
2. Install all dependcies and tools:
   - By running `pnpm install` you should have all the tools, libraries, and dependencies installed.
3. You can run either the web app or the admin dashboard, each one is a package in the monorepo of the project.
   - To run the web app you should run `pnpm dev` or `pnpm web dev` which is an alias for `pnpm --filter @ikseer/web dev`.
   - To run the web app you should run `pnpm dev` or `pnpm web dev` which is an alias for `pnpm --filter @ikseer/admin dev`.

```bash
pnpm --filter @ikseer/web dev   # for web app
pnpm --filter @ikseer/admin dev # for admin dashboard
```

### Advantages of Next.js for Large Websites

- **Enhanced SEO:** SSR and SSG significantly improve search engine visibility, leading to greater organic traffic.
- **Improved Performance:** Fast initial load times due to prerendered pages or static site generation.
- **Scalability:** Next.js architecture efficiently handles large amounts of data and traffic.
- **Developer Experience:** Offers an intuitive and productive development environment with built-in features and optimizations.
- **Flexibility:** Supports both SSR and SSG, allowing choice based on specific needs.

### Additional Considerations

- **Content Management System (CMS):** Integrating a headless CMS can manage dynamic content efficiently.
- **Caching:** Implement caching strategies to further optimize performance and reduce server load.
- **Monitoring and Analytics:** Track website performance and user behavior to continuously optimize the SEO strategy.

## Enabling Multilingual Support in Next.js with `next-intl`

**Internationalization (i18n)** is the process of designing and developing software that can be easily adapted to various languages and regions without requiring significant changes to the codebase. For our application, ensuring multilingual support was critical to reaching a global audience, particularly in English and Arabic. Leveraging the `next-intl` library in our Next.js project provided an efficient and effective solution for our internationalization needs.

### Why Choose `next-intl`?

`next-intl` offers seamless integration with Next.js, making it a powerful tool for implementing multilingual support. Here are some of the key features that made it the right choice for our project:

- **Translation Management:** Efficiently store and retrieve translations for different languages.
- **Language Detection:** Automatically identify and load the user's preferred language.
- **Locale-Specific Formatting:** Handle date, time, currency, and number formatting based on the user's locale.

### Installation and Setup

Setting up `next-intl` in our Next.js project was straightforward. Here’s how we did it:

1. **Installation:**

   ```bash
   pnpm add next-intl
   ```

2. **Configuration:**
   We configured `next-intl` by defining the supported languages and translation resources in `next.config.js`. This setup included specifying paths to JSON files containing translations for English and Arabic.

3. **Loading Translations:**
   In our pages and components, we used the `useTranslations` hook provided by `next-intl` to load and display the appropriate translations.

### Integration in Components

With `next-intl`, integrating translations into our components was seamless. The `useTranslations` hook allowed us to fetch and use translations efficiently within our components.

For instance, in our homepage, we used the `useTranslations` hook to load welcome messages and descriptions in the appropriate language, ensuring our users see content in their preferred language.

### Handling Bidirectional Languages

Supporting Arabic, a right-to-left (RTL) language, required careful handling of text direction. `next-intl` allowed us to easily toggle the text direction based on the selected language, ensuring that our layout and text displayed correctly for Arabic-speaking users.

### Locale-Specific Formatting

`next-intl` facilitated locale-specific formatting for dates, numbers, and currencies. This ensured that users saw data formatted in a way that is familiar and appropriate for their region, enhancing their overall user experience.

---

## UI libraries: Leveraging Preline UI and Tailwind CSS for a Robust and Efficient UI

### UI Component Library and design systems

- After a comprehensive evaluation of numerous UI component libraries, we concluded that the combination of Preline UI and Tailwind CSS offers the most compelling solution for building our website's UI. This fusion provides several distinct advantages:

  **Preline UI:**

  - **Tailwind CSS integration:** Built directly on Tailwind CSS, ensuring seamless integration and a cohesive design experience.
  - **Comprehensive component library:** Offers a wide array of pre-built, customizable UI components for rapid development.
  - **Accessibility focus:** Designed with accessibility in mind, promoting inclusive user experiences.
  - **Theme customization:** Easily create and apply custom themes to match brand aesthetics.

    **Tailwind CSS:**

  - **Utility-first approach:** Provides fine-grained control over styling using utility classes, enabling limitless customization.
  - **Minimal file size:** Keeps CSS codebase lightweight and efficient.
  - **Rapid development:** Facilitates speedy UI development through its intuitive class-based approach.
  - **Responsive design:** Seamlessly adapts to different screen sizes for optimal user experiences.

### How to setup this libraries

1. **Tailwind CSS:**

   - Install using pnpm:

     ```bash
     pnpm install -D tailwindcss
     ```

   - Create a Tailwind configuration file:

     ```bash
     npx tailwindcss init -p
     ```

   - Include Tailwind in your CSS:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

2. **Preline UI:**

   - Install using pnpm:

     ```bash
     pnpm install preline
     ```

   - Configure Preline to work with Tailwind seamlessly

   - Inlude this snippet in the the root of the app:

     ```js
     useEffect(() => {
     	const loadPreline = async () => {
     		await import("preline/preline");

     		window.HSStaticMethods.autoInit();
     	};

     	loadPreline();
     }, [path]);
     ```
