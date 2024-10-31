import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import jQuery from "jquery";
import initMagicWall from "@/assets/js/magicwall";
import initColorBox from "@/assets/js/colorbox";
import SEO from "@/components/seo";

const adivaThumb = "/images/projects/99designs/adiva-naturals/thumbnail.jpg";
const adiva = "/images/projects/99designs/adiva-naturals/adiva-naturals.jpg";
const accessTransThumb = "/images/projects/99designs/access-transcription/thumbnail.jpg";
const accessTrans = "/images/projects/99designs/access-transcription/access-transcription.jpg";
const lakeWhalesThumb = "/images/projects/99designs/lake-whales/thumbnail.jpg";
const lakeWhales = "/images/projects/99designs/lake-whales/lake-whales.jpg";
const slmcThumb = "/images/projects/99designs/sl-mens-clinic/thumbnail.jpg";
const slmc = "/images/projects/99designs/sl-mens-clinic/SL-mens-clinic.jpg";
const ajmeThumb = "/images/projects/99designs/american-junkers/thumbnail.jpg";
const ajme = "/images/projects/99designs/american-junkers/american-junker.jpg";
const apacheThumb = "/images/projects/99designs/apache-cloudstack/thumbnail.jpg";
const apacheCloud = "/images/projects/99designs/apache-cloudstack/apache-cloudstack.jpg";
const bocaThumb = "/images/projects/99designs/boca/thumbnail.jpg";
const boca = "/images/projects/99designs/boca/boca.jpg";
const busWrapThumb = "/images/projects/99designs/bus-wrap/thumbnail.jpg";
const busWrap = "/images/projects/99designs/bus-wrap/bus-wrap.jpg";
const cutawaysThumb = "/images/projects/99designs/cutaways/thumbnail.jpg";
const cutaways = "/images/projects/99designs/cutaways/cutaways.jpg";
const exemptLogicThumb = "/images/projects/99designs/exempt-logic/thumbnail.jpg";
const exemptLogic = "/images/projects/99designs/exempt-logic/exempt-logic.jpg";
const maddingtonThumb = "/images/projects/99designs/maddington/thumbnail.jpg";
const maddington = "/images/projects/99designs/maddington/maddington-farms.jpg";
const noCrayonThumb = "/images/projects/99designs/no-crayon/thumbnail.jpg";
const noCrayon = "/images/projects/99designs/no-crayon/NoCrayonLeftBehind.jpg";
const tubManThumb = "/images/projects/99designs/tubman/thumbnail.jpg";
const tubMan = "/images/projects/99designs/tubman/tubman.jpg";
const uforisThumb = "/images/projects/99designs/uForis/thumbnail.jpg";
const uforis = "/images/projects/99designs/uforis/uForis.jpg";
const lexarThumb = "/images/projects/99designs/lexar/thumbnail.jpg";
const lexar = "/images/projects/99designs/lexar/lexar.jpg";
const bridgetownThumb = "/images/projects/99designs/bridgetown/bridgetownThumb.jpg";
const bridgetown = "/images/projects/99designs/bridgetown/bridgetown.jpg";

const lakbayThumb = "/images/projects/lakbay/lakbay.jpg";
const lakbayFullOne = "/images/projects/lakbay/lakbay-full-1.png";
const lakbayFullTwo = "/images/projects/lakbay/lakbay-full-2.png";
const lakbayMockupOne = "/images/projects/lakbay/lakbay-mockup-1.jpg";
const lakbayMockupTwo = "/images/projects/lakbay/lakbay-mockup-2.jpg";
const argusThumb = "/images/projects/argus/argus-thumb.jpg";
const argusFullOne = "/images/projects/argus/argus-full-1.png";
const argusMockup = "/images/projects/argus/mock-up-devices.jpg";
const covidThumb = "/images/projects/covid-watch/covid-thumb.jpg";
const covidFullOne = "/images/projects/covid-watch/covidwatch-full-1.png";
const covidMockup = "/images/projects/covid-watch/mock-up-devices.jpg";
const kenThumb = "/images/projects/kenware/kenware-thumb.jpg";
const kenFullOne = "/images/projects/kenware/kenware-desktop.png";
const kenMockup = "/images/projects/kenware/mock-up-devices.jpg";
const mueblesThumb = "/images/projects/muebles/thumb.jpg";
const mueblesFullOne = "/images/projects/muebles/full-page-1.png";
const mueblesFullTwo = "/images/projects/muebles/full-page-2.png";
const mueblesMockup = "/images/projects/muebles/mock-up-devices.jpg";
const comingSoon = "/images/coming-soon.png";
const eskwelaMockupOne = "/images/projects/eskwela/eskwela-01.jpg";
const eskwelaMockupTwo = "/images/projects/eskwela/eskwela-02.jpg";
const eskwelaThumb = "/images/projects/eskwela/eskwela-mw.png";
const eskwelaFullOne = "/images/projects/eskwela/eskwela-full-one.png";
const eskwelaFullTwo = "/images/projects/eskwela/eskwela-full-two.png";

function Works() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [init, setInit] = useState(false);
	const magicwallRef = useRef();

	useEffect(() => {
		if (magicwallRef.current) {
			initMagicWall();
			initColorBox();
			setInit(true);
		}
	}, []);

	useEffect(() => {
		if (init) {
			jQuery(magicwallRef.current).magicWall({
				maxItemHeight: 350,
				maxItemWidth: 350,
				delay: 400,
				preloadBeforeSwitch: true,
				loadingMode: "chain",
				pauseOnHover: "item",
				animations:
					"flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
				duration: 800
			});

			jQuery(".colorbox").colorbox({
				maxWidth: "70%",
				maxHeight: "250%",
				scrolling: true,
				onOpen: function () {
					jQuery(magicwallRef.current).magicWall("stop");
				},

				onClosed: function () {
					jQuery(magicwallRef.current).magicWall("start");
				}
			});
		}
		return () => {
			setInit(false);
		};
	}, [init]);

	return (
		<>
			<SEO
				title="Projects | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management, smartva, smart va"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}/projects`}
				author="Jerome Gacoscosim"
			/>
			<Box sx={{ display: "flex", height: "100%", width: "100%" }}>
				<div className="page-outer">
					<div className="page-inner">
						<div
							ref={magicwallRef}
							className="section-full section-full--nopadding  gallery magicwall js-page-work">
							<ul className="magicwall-grid">
								Lakbay
								<li data-thumb={lakbayThumb}>
									<div className="hover-content vcenter" />
									<a
										href={lakbayFullOne}
										title='<a href="https://lakbay-two.vercel.app/" target=_blank" rel="noopener">"https://lakbay-two.vercel.app/</a>'
										className="colorbox"
										rel="magicwall11"
									/>
									<a
										href={lakbayFullTwo}
										title='<a href="https://lakbay-two.vercel.app/" target=_blank" rel="noopener">"https://lakbay-two.vercel.app/</a>'
										className="colorbox"
										rel="magicwall11"
									/>
									<a
										href={lakbayMockupOne}
										title='<a href="https://lakbay-two.vercel.app/" target=_blank" rel="noopener">"https://lakbay-two.vercel.app/</a>'
										className="colorbox"
										rel="magicwall11"
									/>
									<a
										href={lakbayMockupTwo}
										title='<a href="https://lakbay-two.vercel.app/" target=_blank" rel="noopener">"https://lakbay-two.vercel.app/</a>'
										className="colorbox"
										rel="magicwall11"
									/>
								</li>
								Argus
								<li data-thumb={argusThumb}>
									<div className="hover-content vcenter" />
									<a
										href={argusFullOne}
										title='<a href="https://argus-lac.vercel.app/" target="_blank" rel="noopener">https://argus-lac.vercel.app/</a>'
										className="colorbox"
										rel="magicwall12"
									/>
									<a
										href={argusMockup}
										title='<a href="https://argus-lac.vercel.app/" target="_blank" rel="noopener">https://argus-lac.vercel.app/</a>'
										className="colorbox"
										rel="magicwall12"
									/>
								</li>
								CovidWatch
								<li data-thumb={covidThumb}>
									<div className="hover-content vcenter" />
									<a
										href={covidFullOne}
										title='<a href=https://covidwatch-deploy.herokuapp.com/ target="_blank" rel="noopener">https://covidwatch-deploy.herokuapp.com/</a>'
										className="colorbox"
										rel="magicwall13"
									/>

									<a
										href={covidMockup}
										title='<a href="https://covidwatch-deploy.herokuapp.com/" target="_blank" rel="noopener">https://covidwatch-deploy.herokuapp.com/</a>'
										className="colorbox"
										rel="magicwall13"
									/>
								</li>
								Kenware
								<li data-thumb={kenThumb}>
									<div className="hover-content vcenter" />
									<a
										href={kenFullOne}
										title='<a href="https://jeromeski.github.io/kenware" target=_blank" rel="noopener">"https://jeromeski.github.io/kenware</a>'
										className="colorbox"
										rel="magicwall14"
									/>
									<a
										href={kenMockup}
										title='<a href="https://jeromeski.github.io/kenware" target=_blank" rel="noopener">"https://jeromeski.github.io/kenware</a>'
										className="colorbox"
										rel="magicwall14"
									/>
								</li>
								Muebles
								<li data-thumb={mueblesThumb}>
									<div className="hover-content vcenter" />
									<a
										href={mueblesFullOne}
										title='<a href="https://muebles-six.vercel.app/" target="_blank">https://muebles-six.vercel.app/</a>'
										className="colorbox"
										rel="magicwall15"
									/>
									<a
										href={mueblesFullTwo}
										title='<a href="https://muebles-six.vercel.app/" target="_blank">https://muebles-six.vercel.app/</a>'
										className="colorbox"
										rel="magicwall15"
									/>
									<a
										href={mueblesMockup}
										title='<a href="https://muebles-six.vercel.app/" target="_blank">https://muebles-six.vercel.app/</a>'
										className="colorbox"
										rel="magicwall15"
									/>
								</li>
								BOCA
								<li data-thumb={bocaThumb}>
									<div className="hover-content vcenter" />
									<a
										href={boca}
										title='<a href="https://99designs.com/profiles/978806/designs/1006070" target="_blank" rel="noopener">https://99designs.com/profiles/978806/designs/1006070</a>'
										className="colorbox"
										rel="magicwall17"
									/>
								</li>
								Access Transcription
								<li data-thumb={accessTransThumb}>
									<div className="hover-content vcenter" />
									<a
										href={accessTrans}
										title='<a target="_blank" href="https://99designs.com/profiles/978806/designs/1006069">https://99designs.com/profiles/978806/designs/1006069</a>'
										className="colorbox"
										rel="magicwall18"
									/>
								</li>
								Lake Wales
								<li data-thumb={lakeWhalesThumb}>
									<div className="hover-content vcenter" />
									<a
										href={lakeWhales}
										title='<a href="https://99designs.com/profiles/978806/designs/1006071" target="_blank">https://99designs.com/profiles/978806/designs/1006071</a>'
										className="colorbox"
										rel="magicwall19"
									/>
								</li>
								St Louis Mens Clinic
								<li data-thumb={slmcThumb}>
									<div className="hover-content vcenter" />
									<a
										href={slmc}
										title='<a href="https://99designs.com/profiles/978806/designs/2176553" target="_blank">https://99designs.com/profiles/978806/designs/2176553</a>'
										className="colorbox"
										rel="magicwall110"
									/>
								</li>
								Bus Wrap
								<li data-thumb={busWrapThumb}>
									<div className="hover-content vcenter" />
									<a
										href={busWrap}
										title='<a href="https://99designs.com/profiles/978806/designs/2176555" target="_blank">https://99designs.com/profiles/978806/designs/2176555</a>'
										className="colorbox"
										rel="magicwall111"
									/>
								</li>
								Tubman
								<li data-thumb={tubManThumb}>
									<div className="hover-content vcenter" />
									<a
										href={comingSoon}
										title='<a href="https://99designs.com/profiles/978806/designs/2176556" target="_blank">https://99designs.com/profiles/978806/designs/2176556</a>'
										className="colorbox"
										rel="magicwall112"
									/>
								</li>
								Lexar
								<li data-thumb={lexarThumb}>
									<div className="hover-content vcenter" />
									<a
										href={lexar}
										title='<a href="https://99designs.com/profiles/978806/designs/2176557" target="_blank">https://99designs.com/profiles/978806/designs/2176557</a>'
										className="colorbox"
										rel="magicwall113"
									/>
								</li>
								Eskwela
								<li data-thumb={eskwelaThumb}>
									<div className="hover-content vcenter" />
									<a
										href={eskwelaFullOne}
										title='<a href="https://eskwela.vercel.app" target="_blank" rel="noopener">https://eskwela.vercel.app</a>'
										className="colorbox"
										rel="magicwall25"
									/>
									<a
										href={eskwelaFullTwo}
										title='<a href="https://eskwela.vercel.app" target="_blank" rel="noopener">https://eskwela.vercel.app</a>'
										className="colorbox"
										rel="magicwall25"
									/>
									<a
										href={eskwelaMockupOne}
										title='<a href="https://eskwela.vercel.app" target="_blank" rel="noopener">https://eskwela.vercel.app</a>'
										className="colorbox"
										rel="magicwall25"
									/>
									<a
										href={eskwelaMockupTwo}
										title='<a href="https://eskwela.vercel.app" target="_blank" rel="noopener">https://eskwela.vercel.app</a>'
										className="colorbox"
										rel="magicwall25"
									/>
								</li>
								Cutaways
								<li data-thumb={cutawaysThumb}>
									<div className="hover-content vcenter" />
									<a
										href={cutaways}
										title='<a href="https://99designs.com/profiles/978806/designs/2176558
" target="_blank">https://99designs.com/profiles/978806/designs/2176558
</a>'
										className="colorbox"
										rel="magicwall114"
									/>
								</li>
								Bridgetown
								<li data-thumb={bridgetownThumb}>
									<div className="hover-content vcenter" />
									<a
										href={bridgetown}
										title='<a href="https://99designs.com/profiles/978806/designs/1006076" target="_blank">https://99designs.com/profiles/978806/designs/1006076</a>'
										className="colorbox"
										rel="magicwall115"
									/>
								</li>
								Rocky
								<li data-thumb={ajmeThumb}>
									<div className="hover-content vcenter" />
									<a
										href={ajme}
										title='<a href="https://99designs.com/profiles/978806/designs/2176554" target="blank" noopener="true">https://99designs.com/profiles/978806/designs/2176554</a>'
										className="colorbox"
										rel="magicwall116"
									/>
								</li>
								Adiva Naturals
								<li data-thumb={adivaThumb}>
									<div className="hover-content vcenter" />
									<a
										href={adiva}
										title='<a href="https://99designs.com/profiles/978806/designs/1847471" target="blank">https://99designs.com/profiles/978806/designs/1847471</a>'
										className="colorbox"
										rel="magicwall117"
									/>
								</li>
								NoCrayonLeftBehind
								<li data-thumb={noCrayonThumb}>
									<div className="hover-content vcenter" />
									<a
										href={noCrayon}
										title='<a href="https://99designs.com/profiles/978806/designs/1006074" target="_blank">https://99designs.com/profiles/978806/designs/1006074</a>'
										className="colorbox"
										rel="magicwall118"
									/>
								</li>
								uForis
								<li data-thumb={uforisThumb}>
									<div className="hover-content vcenter" />
									<a
										href={uforis}
										title='<a href="https://99designs.com/profiles/978806/designs/1006064" target="_blank">https://99designs.com/profiles/978806/designs/1006064</a>'
										className="colorbox"
										rel="magicwall119"
									/>
								</li>
								Tubman
								<li data-thumb={tubManThumb}>
									<div className="hover-content vcenter" />
									<a
										href={tubMan}
										title='<a href="https://99designs.com/profiles/978806/designs/2176556" target="_blank">https://99designs.com/profiles/978806/designs/2176556</a>'
										className="colorbox"
										rel="magicwall120"
									/>
								</li>
								<li data-thumb={maddingtonThumb}>
									<div className="hover-content vcenter" />
									<a
										href={maddington}
										title='<a href="https://99designs.com/profiles/978806/designs/71164" target="_blank">https://99designs.com/profiles/978806/designs/71164</a>'
										className="colorbox"
										rel="magicwall120"
									/>
								</li>
								<li data-thumb={apacheThumb}>
									<div className="hover-content vcenter" />
									<a
										href={apacheCloud}
										title='<a href="https://99designs.com/profiles/978806/designs/1006069" target="_blank">https://99designs.com/profiles/978806/designs/1006069</a>'
										className="colorbox"
										rel="magicwall120"
									/>
								</li>
								<li data-thumb={exemptLogicThumb}>
									<div className="hover-content vcenter" />
									<a
										href={exemptLogic}
										title='<a href="https://99designs.com/profiles/978806/designs/71226" target="_blank">https://99designs.com/profiles/978806/designs/71226</a>'
										className="colorbox"
										rel="magicwall120"
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Box>
		</>
	);
}

export default Works;
