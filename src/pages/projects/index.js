import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import jQuery from "jquery";
import initMagicWall from "@/assets/js/magicwall";
import initColorBox from "@/assets/js/colorbox";

const moto = "/images/projects/2019/01/Adrian-Flux-Motorsport-1.jpg";
const tte = "/images/projects/2017/10/ttelo.png";
const killer = "/images/projects/2019/06/Bez-nazwy-3.jpg";
const aspect =
	"/images/projects/2019/08/London-Block-Management-Services-Aspect-Property-Management-1-e1567256441746.jpg";
const chanelis = "/images/projects/2019/01/unnamed.jpg";
const bespoke = "/images/projects/2019/01/Bez-nazwy-2.png";
const quality = "/images/projects/2019/08/ttelo.png";
const forever = "/images/projects/2017/10/Home-Forever-Cars-Adrian-Flux-1.jpg";
const greta = "/images/projects/2016/09/Greta-Offical-Online-Store-Greta-e1478003527992.jpg";
const villas = "/images/projects/2015/05/Bez-nazwy-1.jpg";
const rocky =
	"/images/projects/2019/01/Rockys-Mountain-Gear-Waterproof-Socks-Hats-and-Gloves-Rockys.jpg";
const learner = "/images/projects/2017/11/ttelo.png";
const po = "/images/projects/2015/05/Bez-nazwy-8.jpg";
const titan = "/images/projects/2019/08/1-1.jpg";
const synergy = "/images/projects/2019/08/1-2.jpg";

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

	const works = {
		title: "Works | Jerome Gacoscosim | React",
		description:
			"Hire Professional Fullstack Web Developer - MongDB, Express, React and Node. From building animations, interactive experiences to developing your Backend, Search Engine Optimization(SEO) solutions and website maintenance",
		canonical: "Works | Jerome Gacoscosim | React",
		url: process.env.REACT_APP_BASE_URL
	};

	return (
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
							TTE
							<li data-thumb={tte}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank" rel="noopener">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall17"
								/>
							</li>
							Killer Creative
							<li data-thumb={killer}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a target="_blank" href="https://jeromeg-fullstack.github.io/page-under-construction/">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall18"
								/>
							</li>
							Aspect Property
							<li data-thumb={aspect}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall19"
								/>
							</li>
							Channelislands
							<li data-thumb={chanelis}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall110"
								/>
							</li>
							BESPOKE
							<li data-thumb={bespoke}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall111"
								/>
							</li>
							Quality Solicitors
							<li data-thumb={quality}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall112"
								/>
							</li>
							Forever Cars
							<li data-thumb={forever}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
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
							Greta
							<li data-thumb={greta}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall114"
								/>
							</li>
							villas away
							<li data-thumb={villas}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall115"
								/>
							</li>
							Rocky
							<li data-thumb={rocky}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="blank" noopener="true">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall116"
								/>
							</li>
							Learner Driver
							<li data-thumb={learner}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall117"
								/>
							</li>
							PO
							<li data-thumb={po}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall118"
								/>
							</li>
							Titan Marine
							<li data-thumb={titan}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall119"
								/>
							</li>
							Synergy
							<li data-thumb={synergy}>
								<div className="hover-content vcenter" />
								<a
									href={comingSoon}
									title='<a href="https://jeromeg-fullstack.github.io/page-under-construction/" target="_blank">https://jeromeg-fullstack.github.io/page-under-construction/</a>'
									className="colorbox"
									rel="magicwall120"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Box>
	);
}

export default Works;
