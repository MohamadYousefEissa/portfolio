<template>
  <header>
    <nav>
      <Container>
        <Row>
          <Col justify-content="start" font-weight="bold">
            <NuxtLink to="/">
              <span style="font-size: 10px">MohamadYousefEissa</span>
              &ThinSpace;Portfolio
            </NuxtLink>
          </Col>
          <Col>
            <ul class="d-flex gap-4">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/projects">Projects</NuxtLink></li>
              <li><NuxtLink to="/skills">Skills</NuxtLink></li>
            </ul>
          </Col>
          <Col justify-content="end">
            <div class="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/mohamad-yousef-eissa-381a6429a/"
                target="_blank"
                ><Icon name="bi:linkedin"
              /></a>
              <a href="https://github.com/MohamadYousefEissa" target="_blank"
                ><Icon name="bi:github"
              /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 1.5rem 0;
  background-color: hsl(from var(--main-bg) h s l / 0.4);
  backdrop-filter: blur(100px);

  li > .router-link-active {
    color: var(--sec-clr);
    font-weight: bold;
  }
  a {
    transition: color 0.2s;
  }
  li > a:not(.router-link-active):hover {
    color: hsl(from var(--sec-clr) h s l / 0.6);
  }
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  font-size: 14px;
  font-weight: 600;
}
</style>
