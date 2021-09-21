<script lang="ts">
import Button from './Button.svelte'

let isActive = false

let prevBodyPosition
let prevBodyOverflow
let prevBodyWidth

const openModal = () => {
    isActive = !isActive
    disableScroll()
}
const closeModal = () => {
    isActive = !isActive
    enableScroll()
}

const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  };

  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || '';
    document.body.style.top = '';
    document.body.style.overflow = prevBodyOverflow || '';
    document.body.style.width = prevBodyWidth || '';
    window.scrollTo(0, scrollY);
  };
</script>

<Button on:click={openModal}>Termin buchen</Button>
{#if isActive}
<div
    class="bg"
    on:click={closeModal}
  >
    <div class="window-wrap">
      <div
        class="window"
        role="dialog"
        aria-modal="true"
    
      >
        <div class="content">
          <div class="signup">
              <div class="image-box"></div>
<div class="signup-box">
    <p>Wir brauchen leider noch ein bisschen Zeit um alles
        vorzubereiten. Bis dahin kannst du uns hier deine eMail-Adresse
        hinterlassen. Dann melden wir uns{" "}
        <strong>- auch wirklich nur dann -</strong> wenn wir unseren
        Salon öffnen.</p>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/if}

  <!-- 
      <Box css={{ display: "flex" }}>
          <Box
            css={{
              flex: 1,
              overflow: "hidden",
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              display: "none",
              "@sm": {
                display: "block",
              },
            }}
          >
            <Image
              src={SignUpImage}
              layout="responsive"
              width="3948"
              height="5922"
              alt="barber"
            />
          </Box>
          <Box
            css={{
              flex: 1,
              padding: "$5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {hasBeenSubmitted ? (
              <p>
                Das hat geklappt! 🥰 Wir melden uns bei dir, wenn es los geht.
              </p>
            ) : (
              <>
                Wir brauchen leider noch ein bisschen Zeit um alles
                vorzubereiten. Bis dahin kannst du uns hier deine eMail-Adresse
                hinterlassen. Dann melden wir uns{" "}
                <strong>- auch wirklich nur dann -</strong> wenn wir unseren
                Salon öffnen.
                <form onSubmit={submit}>
                  <Fieldset>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Fieldset>
                  <Box
                    css={{
                      display: "flex",
                      marginTop: 25,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "..." : "Sagt Bescheid" }
                    </Button>
                  </Box>
                </form>
              </>
            )}
          </Box>
   -->

  <style>
       * {
    box-sizing: border-box;
  }

  .image-box {
      flex: 1;
              overflow: hidden;
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
              /* display: none; */
              display: block;
              /* "@sm": {
                display: "block",
              }, */
  }

  .signup-box {
    flex: 1;
              padding: var(--space5);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: var(--sage1)
  }

  .signup {
      display: flex;
      /* width: 300px;
      height: 300px;
      background: var(--sage12); */
  }

  .bg {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
  }

   .window-wrap {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }

  .content {
    position: relative;
    max-height: calc(100vh - 4rem);
    max-width: calc(100vw - 10vw);
    overflow: auto;
background: var(--sage12);    
  }
  </style>