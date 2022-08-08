<style lang="scss">
  @import "../styles/_mixins.scss";

  footer {
    background-color: var(--theme-dark-blue);
    color: var(--color-white);
    padding-block: calc(4 * 16px) calc(7 * 16px);

    // grid is partially inherited by main layout
    // to avoid overwriting that, I use a child element to contain its own grid
    // I'd use subgrid, but at time of writing, it's not very well supported. One day!
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    > section:first-child {
      grid-column: span 2;
    }

    @include screen-md-up {
      grid-template-columns: repeat(4, 1fr);

      > section:first-child {
        grid-column: initial;
      }
    }
  }

  .section-heading {
    color: var(--theme-yellow);
    margin-top: 0;
    text-transform: uppercase;
  }
</style>

<footer class="footer full-width">
  <div class="footer-content">
    <section>Section with logo and intro</section>
    <section>
      <h4 class="section-heading">Menu</h4>
      <ul>
        <li>Home</li>
        <li>Posts</li>
        <li>Snippets</li>
        <li>Bio</li>
      </ul>
    </section>
    <section>
      <h4 class="section-heading">Tutorials</h4>
      <ul>
        <li>CSS3</li>
        <li>Animations</li>
        <li>React</li>
        <li>JavaScript</li>
      </ul>
    </section>
    <section>
      <h4 class="section-heading">Useful links</h4>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Codepen</li>
      </ul>
    </section>
  </div>
</footer>
