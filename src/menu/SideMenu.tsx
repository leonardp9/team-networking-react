export function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form action="" id="contact-form">
          <div className="form-row">
            <label htmlFor="e">Email</label>
            <input type="email" name="em" placeholder="example@job.com" />
          </div>
          <div className="form-row">
            <label htmlFor="contactName">Name</label>
            <input type="text" name="nume" placeholder="your name" />
          </div>
          <div className="actions">
            <button type="submit">Contact</button>
          </div>
        </form>
      </section>
    </div>
  );
}
