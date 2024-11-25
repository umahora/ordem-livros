<script>
    import {
        IconBook,
        IconBooks,
        IconBrandFacebook,
        IconBrandInstagram,
        IconBrandYoutube,
        IconFriends,
        IconHome,
        IconRss,
        IconSquare1,
        IconSquare2,
        IconSquare3,
        IconUser,
    } from "@tabler/icons-svelte";
    import autores from "../../constants/autores";
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";
</script>

<aside
    class="flex flex-col gap-10 w-72 self-start
    border border-zinc-800 p-5 rounded-md"
>
    <Menu titulo="Navegação">
        <MenuItem texto="Início" href="/">
            <IconHome size={20}/>
        </MenuItem>
        <MenuItem texto="Personagens" href="/">
            <IconFriends size={20}/>
        </MenuItem>
        <MenuItem texto="Autores" href="/autores">
            <IconUser size={20}/>
        </MenuItem>
        <MenuItem texto="Séries" href="/">
            <IconBooks size={20}/>
        </MenuItem>
    </Menu>

    <Menu titulo="Principais Autores">
        <!-- {#each autores as autor}
            <MenuItem texto={autor.nome} href="/autores/{autor.id}">
                <IconSquare size={20}/>
            </MenuItem>    
        {/each} -->
        <MenuItem texto="J.K. Rowling" href="/autores/j-k-rowling">
            <IconSquare1 size={20}/>
        </MenuItem>
        <MenuItem texto="J.R.R. Tolkien" href="/autores/j-r-r-tolkien">
            <IconSquare2 size={20}/>
        </MenuItem>
        <MenuItem texto="George R.R. Martin" href="/autores/george-r-r-martin">
            <IconSquare3 size={20}/>
        </MenuItem>
    </Menu>

    <Menu titulo="Outros Categorias">
        <MenuItem texto="Últimas Notícias" href="/">
            <IconRss size={20}/>
        </MenuItem>
        <MenuItem texto="Séries Populares" href="/">
            <IconBooks size={20}/>
        </MenuItem>
        <MenuItem texto="Facebook" href="/">
            <IconBrandFacebook size={20}/>
        </MenuItem>
        <MenuItem texto="Instagram" href="/">
            <IconBrandInstagram size={20}/>
        </MenuItem>
        <MenuItem texto="Youtube" href="/">
            <IconBrandYoutube size={20}/>
        </MenuItem>
    </Menu>
</aside>
