import React, { useState, useEffect } from "react";
import { Box, Container, styled, Pagination, Typography, Stack } from "@mui/material";
import ThemeDrawer from "@/components/theme-drawer";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import BlogPageTitle from "@/components/blog-page-title";
import blogData from "@/data/posts";
import BlogPost from "@/components/blog-post";
import ArticleCard from "@/components/article-item";
import ArticleItem from "@/components/article-item";

const BlogList = styled(Box)({});

const ArticleList = styled(Stack)({});

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const { isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isLaptop || isLaptopL || isDesktop;

	const [currentPage, setCurrentPage] = useState(1); // Current page state
	const postsPerPage = 2; // Number of posts to display per page

	// Calculate the total number of pages
	const totalPages = Math.ceil(posts.length / postsPerPage);

	// Get the blog posts for the current page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Handle page change
	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		let isMounted = true;
		const getPosts = () => {
			try {
				if (blogData) {
					setPosts(blogData);
				}
			} catch (error) {
				throw new Error("Error fetching posts");
			}
		};
		if (isMounted) {
			getPosts();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			{isBigView && <ThemeDrawer />}
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
				<BlogPageTitle />
				<Box sx={{ backgroundColor: "#1d1d1d", padding: "70px 0" }}>
					<Container>
						<BlogList>
							{currentPosts.map((post) => (
								<BlogPost
									key={post.id}
									title={post.title}
									image={post.image}
									tag={post.tag}
									author={post.author}
									date={post.date}
									comments={post.comments}
									views={post.views}
									description={post.description}
								/>
							))}
						</BlogList>
						<Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
							<Pagination
								count={totalPages} // Total number of pages
								page={currentPage} // Current page
								onChange={handlePageChange} // Handle page change
								color="secondary" // Color of the pagination (can be changed)
								variant="outlined"
								shape="rounded"
							/>
						</Box>
						<Box>
							<Typography variant="h4" mt={3} mb={1}>
								Related Posts
							</Typography>
							{posts.slice(0, 1).map((post, idx) => {
								return (
									<BlogPost
										key={post.id}
										title={post.title}
										image={post.image}
										tag={post.tag}
										author={post.author}
										date={post.date}
										comments={post.comments}
										views={post.views}
										description={post.description}
									/>
								);
							})}
						</Box>
						<ArticleList>
							{posts.slice(0, 5).map((article, idx) => {
								return (
									<React.Fragment key={idx}>
										<ArticleItem {...article} />
									</React.Fragment>
								);
							})}
						</ArticleList>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum accumsan
						aliquam. In eu ipsum neque. Mauris nec nisl at enim malesuada lacinia eget sit amet
						neque. Vestibulum volutpat ligula ligula, vel porta lacus rutrum non. Pellentesque
						imperdiet massa vel rhoncus vulputate. Phasellus vitae ante eu ex congue pulvinar. Donec
						rutrum arcu ut faucibus pretium. Integer pellentesque elit risus, molestie ultrices
						turpis lacinia ac. Sed mollis massa vitae tellus condimentum, vel fringilla ante
						convallis. Vivamus rutrum varius placerat. Etiam efficitur eleifend ante, id tincidunt
						mauris vulputate nec. Sed turpis enim, porta at varius vel, ultricies vitae libero. Nam
						at elit eros. Nullam accumsan lorem ut mi accumsan pellentesque. Aenean auctor egestas
						consequat. Curabitur consectetur ultricies ipsum, et varius velit tristique eu. Nunc
						vestibulum ullamcorper metus non pretium. Nunc sit amet mattis turpis. Maecenas eu
						condimentum leo, sed euismod nunc. Nunc eros tellus, vestibulum id posuere et, facilisis
						sagittis mauris. Nullam non ex sit amet felis efficitur pharetra. Integer massa arcu,
						sollicitudin quis leo at, tristique placerat odio. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Cras sit amet nibh gravida, venenatis sem imperdiet,
						pulvinar neque. Phasellus elit sapien, hendrerit at finibus vitae, scelerisque ut magna.
						Donec nunc nisi, dictum ac neque id, lacinia pellentesque nisi. Curabitur consequat
						augue quis porta molestie. Donec auctor leo id nunc dignissim imperdiet. Etiam nec lorem
						sodales, semper enim vitae, consequat quam. Sed aliquet nibh lorem. In condimentum,
						libero sit amet dignissim consectetur, purus leo molestie nulla, quis tristique sem
						mauris et nibh. Proin dignissim nisl eu lectus aliquam, non dictum nisi tincidunt. Sed
						at consectetur massa. Praesent blandit lacus eget magna porttitor tempor. Morbi iaculis
						risus dolor, eu facilisis eros pellentesque id. Vivamus egestas hendrerit nibh, sit amet
						semper arcu efficitur sed. Duis aliquam mi sed dolor porttitor, vitae rhoncus diam
						bibendum. Phasellus in ultricies velit. Praesent pulvinar consequat orci luctus egestas.
						In hac habitasse platea dictumst. Sed elementum id lectus lobortis pretium. Vivamus ac
						condimentum sem. Morbi sit amet accumsan sem, eget interdum felis. Curabitur efficitur
						purus ipsum, sed malesuada est mattis vel. Sed in nulla a sapien mollis fermentum. Nulla
						pretium finibus ligula, eget gravida lacus lobortis id. Curabitur ipsum mauris,
						sollicitudin a tristique a, porta vitae nunc. Duis efficitur dolor odio, vitae porta
						nibh convallis eget. Pellentesque accumsan erat id nibh tincidunt, ac convallis velit
						auctor. Etiam augue libero, cursus interdum nunc vitae, mattis varius erat. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Suspendisse vehicula ipsum sed erat
						dictum, et ultrices ligula posuere. Nullam a metus porta, congue elit et, fringilla dui.
						Nunc eget erat imperdiet, suscipit leo at, egestas dolor. Etiam semper consequat
						imperdiet. Cras elementum neque ut mauris elementum, mattis lobortis tellus gravida.
						Aliquam lorem tortor, tempus ut finibus a, ornare vel orci. Vestibulum ac leo vitae
						turpis blandit venenatis. Praesent ut lacus a purus efficitur hendrerit. Phasellus
						efficitur venenatis nulla, vel rhoncus diam lobortis id. Vestibulum hendrerit erat arcu,
						id pharetra quam hendrerit eu. Morbi eros erat, malesuada et faucibus vitae, ultricies
						eget enim. Morbi mi urna, posuere sed mi a, mollis facilisis nulla. Proin laoreet semper
						neque sit amet mollis. Vestibulum ultricies, metus quis lobortis molestie, mauris sem
						viverra sapien, ac cursus diam elit eu libero. Morbi blandit, nulla vehicula luctus
						varius, dolor lacus vestibulum enim, bibendum blandit sem erat at urna. Fusce purus
						tellus, accumsan et magna non, lacinia semper est. Phasellus consectetur leo vel magna
						sollicitudin consequat. Suspendisse rhoncus tincidunt arcu id malesuada. Integer
						accumsan, sem at finibus sodales, odio felis posuere ligula, ut venenatis elit massa in
						arcu. Maecenas porttitor est eu erat rutrum, in facilisis urna lobortis. Phasellus sit
						amet lacus iaculis, dignissim lacus et, tempor est. Curabitur eu justo odio. Morbi eget
						urna turpis. Integer sit amet tempus eros. Praesent orci sem, egestas vel augue et,
						tempus finibus ipsum. Orci varius natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Mauris tristique et nisl vitae bibendum. Sed eget porta lorem.
						Ut sit amet eros at odio dignissim bibendum at sed dui. Sed et iaculis risus. Donec
						ullamcorper odio id dui lobortis ullamcorper et a tortor. Praesent efficitur rhoncus
						molestie. Praesent sed sapien eros. Nunc blandit lorem ante, id gravida metus fermentum
						mattis. Phasellus sodales non justo a congue. Maecenas vitae urna lacus. Vestibulum
						neque nunc, posuere quis aliquet et, ornare at urna. Suspendisse potenti. In gravida et
						leo vel consectetur. Suspendisse nunc est, vehicula vel feugiat a, vehicula eget metus.
						Proin eu mattis tellus. Cras ultricies semper dui. Morbi eu finibus lacus, quis accumsan
						nisi. Proin aliquet nisi orci, quis hendrerit velit elementum at. Praesent id sapien
						elit. Aenean porta lobortis justo vitae efficitur. Nunc accumsan est vitae gravida
						placerat. Nulla facilisi. Etiam convallis, mi non pellentesque egestas, dolor dui
						finibus risus, id volutpat lectus ante vel sem. Vestibulum nec accumsan nisi. Donec
						luctus varius purus, et sodales turpis cursus nec. Nunc mollis laoreet pretium. Aenean
						imperdiet purus vel facilisis fringilla. Pellentesque consequat id augue eget rhoncus.
						Aenean sit amet magna aliquam, lacinia neque non, suscipit lacus. Pellentesque laoreet
						sem lorem, eget pretium tellus efficitur sed. Sed pharetra sollicitudin nulla aliquam
						lobortis. Aliquam sollicitudin magna mi, ut mollis tortor malesuada ut. Integer sagittis
						aliquam urna, id placerat justo blandit quis. Pellentesque vel dui facilisis sapien
						ullamcorper hendrerit sed sit amet nisi. Suspendisse blandit maximus blandit. Proin eget
						eros nunc. Donec venenatis risus sed velit tincidunt, non sodales neque bibendum. Cras
						id arcu bibendum, posuere quam eget, mattis quam. Nullam vel sem vitae lectus hendrerit
						iaculis. Mauris imperdiet lobortis aliquet.
					</Container>
				</Box>
			</Box>
		</>
	);
};

export default Blog;
