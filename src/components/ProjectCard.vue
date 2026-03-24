<template>
	<router-link :to="`/projeto/${project.id}`" class="project-card">
		<div class="project-card__image">
			<img :src="project.cover" :alt="project.title" loading="lazy" />
			<div class="project-card__overlay">
				<span class="project-card__view">Ver projeto</span>
			</div>
		</div>
		<div class="project-card__info">
			<span class="project-card__category">{{ project.category }}</span>
			<h3 class="project-card__title">{{ project.title }}</h3>
			<span class="project-card__year">{{ project.year }}</span>
		</div>
	</router-link>
</template>

<script setup>
defineProps({
	project: { type: Object, required: true },
});
</script>

<style scoped>
.project-card {
	display: block;
	cursor: pointer;
}

.project-card__image {
	position: relative;
	overflow: hidden;
	aspect-ratio: 3 / 4;
	background-color: var(--color-bg-alt);
}

.project-card__image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-card__image img {
	transform: scale(1.05);
}

.project-card__overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(26, 26, 26, 0.3);
	opacity: 0;
	transition: opacity var(--transition);
}

.project-card:hover .project-card__overlay {
	opacity: 1;
}

.project-card__view {
	font-size: 0.75rem;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	color: var(--color-white);
	border: 1px solid var(--color-white);
	padding: 0.8rem 1.5rem;
	transition: all var(--transition);
}

.project-card:hover .project-card__view {
	background-color: var(--color-white);
	color: var(--color-dark);
}

.project-card__info {
	padding: 1.2rem 0;
}

.project-card__category {
	font-size: 0.65rem;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	color: var(--color-accent);
}

.project-card__title {
	font-family: var(--font-serif);
	font-size: 1.3rem;
	font-weight: 400;
	margin: 0.3rem 0;
	color: var(--color-text);
}

.project-card__year {
	font-size: 0.75rem;
	color: var(--color-text-light);
}
</style>
