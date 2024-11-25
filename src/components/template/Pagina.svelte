<script>
    import AreaLateral from "./AreaLateral.svelte";
import Cabecalho from "./Cabecalho.svelte";
    import Rodape from "./Rodape.svelte";
</script>

<div
    class="
	flex flex-col min-h-screen
    bg-black text-white"
>
    <Cabecalho />
    <div class="flex flex-1 gap-5 mx-auto max-w-7xl w-full py-5">
        <main class="flex-1 ">
            <slot></slot>
        </main>
        <AreaLateral />
    </div>
    <Rodape />
</div>
