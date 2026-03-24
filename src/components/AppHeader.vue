<template>
	<header class="header" :class="{ scrolled: isScrolled, hidden: isHidden }">
		<div class="container header__inner">
			<router-link to="/" class="header__logo">
				<span class="logo-name">Maria Luiza</span>
				<span class="logo-subtitle">Pinto Ribeiro</span>
			</router-link>

			<button
				class="header__menu-btn"
				:class="{ active: menuOpen }"
				@click="menuOpen = !menuOpen"
				aria-label="Menu"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<nav class="header__nav" :class="{ open: menuOpen }">
				<router-link to="/" @click="menuOpen = false">Início</router-link>
				<router-link to="/sobre" @click="menuOpen = false">Sobre</router-link>
				<router-link to="/portfolio" @click="menuOpen = false">Portfólio</router-link>
				<router-link to="/contato" @click="menuOpen = false">Contato</router-link>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isHidden = ref(false);
const menuOpen = ref(false);
let lastScrollY = 0;

function handleScroll() {
	const currentScrollY = window.scrollY;
	isScrolled.value = currentScrollY > 50;
	isHidden.value = currentScrollY > lastScrollY && currentScrollY > 200;
	lastScrollY = currentScrollY;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	height: var(--header-height);
	transition: all var(--transition);
	background-color: transparent;
}

.header.scrolled {
	background-color: rgba(248, 246, 243, 0.95);
	backdrop-filter: blur(10px);
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.header.hidden {
	transform: translateY(-100%);
}

.header__inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
}

.header__logo {
	display: flex;
	flex-direction: column;
	line-height: 1.1;
}

.logo-name {
	font-family: var(--font-serif);
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 0.02em;
	color: var(--color-text);
}

.logo-subtitle {
	font-family: var(--font-sans);
	font-size: 0.65rem;
	font-weight: 400;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	color: var(--color-text-light);
}

.header__nav {
	display: flex;
	gap: 2.5rem;
}

.header__nav a {
	font-size: 0.8rem;
	font-weight: 400;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-light);
	transition: color var(--transition);
	position: relative;
}

.header__nav a::after {
	content: "";
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 1px;
	background-color: var(--color-accent);
	transition: width var(--transition);
}

.header__nav a:hover,
.header__nav a.router-link-active {
	color: var(--color-text);
}

.header__nav a:hover::after,
.header__nav a.router-link-active::after {
	width: 100%;
}

.header__menu-btn {
	display: none;
	flex-direction: column;
	gap: 5px;
	padding: 5px;
	z-index: 101;
}

.header__menu-btn span {
	display: block;
	width: 24px;
	height: 1.5px;
	background-color: var(--color-text);
	transition: all var(--transition);
}

.header__menu-btn.active span:nth-child(1) {
	transform: rotate(45deg) translateY(4.5px) translateX(4.5px);
}

.header__menu-btn.active span:nth-child(2) {
	opacity: 0;
}

.header__menu-btn.active span:nth-child(3) {
	transform: rotate(-45deg) translateY(-4.5px) translateX(4.5px);
}

@media (max-width: 768px) {
	.header__menu-btn {
		display: flex;
	}

	.header__nav {
		position: fixed;
		inset: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		background-color: var(--color-bg);
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--transition);
	}

	.header__nav.open {
		opacity: 1;
		pointer-events: all;
	}

	.header__nav a {
		font-size: 1.2rem;
	}
}
</style>
