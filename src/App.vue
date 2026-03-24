<template>
	<router-view />
</template>

<style scoped>
header {
	padding: 1.5rem 2rem;
	display: flex;
	justify-content: center;
	background-color: #4d4133;
	background-image:
		linear-gradient(
			0deg,
			transparent 24%,
			rgba(0, 0, 0, 0.2) 25%,
			rgba(0, 0, 0, 0.2) 25%,
			transparent 27%,
			transparent 74%,
			rgba(0, 0, 0, 0.2) 75%,
			rgba(0, 0, 0, 0.2) 76%,
			transparent 77%,
			transparent
		),
		linear-gradient(
			90deg,
			transparent 24%,
			rgba(0, 0, 0, 0.2) 25%,
			rgba(0, 0, 0, 0.2) 26%,
			transparent 27%,
			transparent 74%,
			rgba(0, 0, 0, 0.2) 75%,
			rgba(0, 0, 0, 0.2) 76%,
			transparent 77%,
			transparent
		);
	background-size: 40px 40px;
	border-bottom: 2dvh solid #6d9394;
}

main {
	display: flex;
	flex-direction: column;
}

#hero {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4rem 2rem;
}

.hero-content {
	display: flex;
	align-items: center;
	gap: 4rem;
	max-width: 1000px;
	width: 100%;
}

.profile-image {
	width: 300px;
	height: 300px;
	border-radius: 50%;
	object-fit: cover;
	flex-shrink: 0;
}

.hero-text {
	text-align: left;
}

#hero h1 {
	font-size: clamp(3rem, 6vw, 5rem);
	line-height: 1.1;
	margin: 0;
}

.firstname {
	font-size: clamp(3rem, 6vw, 5rem);
	color: #f9f9f9;
}

.lastname {
	font-size: clamp(2rem, 3vw, 2rem);
	margin: 0rem 0 1.5rem 0;
	opacity: 0.8;
	color: #f9f9f9;
}

.titles {
	font-size: 1rem;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	opacity: 0.6;
	margin: 0;
	color: #f9f9f9;
	font-size: clamp(2rem, 3vw, 2rem);
}

.titles span {
	margin: 0 0.5rem;
}

aside {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-left: 3rem;
}

.contacts-arrow {
	font-size: 1.5rem;
	animation: bounce 2s infinite;
}

@keyframes bounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(0.5rem);
	}
}

.contacts-list {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.contact-item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
	text-decoration: none;
}

.contact-item:hover {
	background-color: rgba(255, 255, 255, 0.2);
	transform: scale(1.1);
}

.contact-item img {
	width: 30px;
	height: 30px;
	object-fit: contain;
}

section:not(#hero) {
	max-width: 900px;
	margin: 0 auto;
	padding: 2rem 2rem;
}

.description {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	line-height: 1.8;
	font-size: 1.05rem;
}

.description p {
	margin: 0;
}

h2 {
	font-size: 2rem;
	margin-bottom: 1rem;
}

footer {
	text-align: center;
	padding: 2rem;
	font-size: 0.85rem;
	opacity: 0.5;
}

@media (max-width: 768px) {
	.hero-content {
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	.hero-text {
		text-align: center;
	}

	.profile-image {
		width: 200px;
		height: 200px;
	}

	nav {
		flex-direction: column;
		gap: 1rem;
	}

	nav ul {
		flex-direction: column;
		gap: 0.5rem;
	}

	aside {
		margin-left: 0;
		flex-direction: row;
		gap: 1rem;
	}

	.contacts-list {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.contacts-arrow {
		display: none;
	}
}
</style>
