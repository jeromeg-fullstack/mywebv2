// pages/sitemap.xml.js
const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }) => {
	const baseUrl = "https://smartva.studio";

	const staticPages = ["/", "/home", "/about", "/projects", "/testimonials", "/contact"];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
				.map((url) => {
					return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
				})
				.join("")}
    </urlset>`;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return { props: {} };
};

export default Sitemap;

