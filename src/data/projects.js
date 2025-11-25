import project1 from '../assets/Neovim.png'
import project2 from '../assets/NixOS-Config.png'
import project3 from '../assets/Auth.png'

export const projects = [
  {
    id: 1,
    title: "Neovim",
    description: "My neovim config is what i use daily to code, its been made by me personally using LUA the programming language, i also have a config made with Nix. https://github.com/Mitchyopp/neovim",
    image: project1,
  },
  {
    id: 2,
    title: "NixOS",
    description: "NixOS is a Linux Distrobution, it's declarative which means you declare everything about your system in a configuration file. Your entire system is defined in a language called Nix. Everything from your apps installed to all of your system configurations are all defined here, It makes it incredibly easy to copy your entire system to another device by just copying the configuration file. This repo is private at the moment until i add some password hashing.",
    image: project2,
  },
  {
    id: 3,
    title: "Blog Auth",
    description: "This is a website with authentithication made with SQL, it allows users to create an account, log into that account, post a blog and delete it if they are the correct user via validation. https://github.com/Mitchyopp/blog-auth",
    image: project3,
  },
  {
    id: 4,
    title: "Colourschemes",
    description: "This is a repo containing colourschemes i use, for my IDE Neovim and for websites. https://github.com/Mitchyopp/Colourschemes",
  }
]
