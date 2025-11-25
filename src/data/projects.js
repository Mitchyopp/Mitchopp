import project1 from '../assets/Neovim.png'
import project2 from '../assets/NixOS-Config.png'
import project3 from '../assets/Auth.png'
import project5 from '../assets/hanabira.png'
import project6 from '../assets/kana-learner.png'

export const projects = [
  {
    id: 1,
    title: "Neovim",
    description: "My neovim config is what i use daily to code, its been made by me personally using LUA the programming language, i also have a config made with Nix.",
    repo: "https://github.com/Mitchyopp/neovim",
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
    description: "This is a website with authentithication made with SQL, it allows users to create an account, log into that account, post a blog and delete it if they are the correct user via validation.",
    repo: "https://github.com/Mitchyopp/blog-auth",
    image: project3,
  },
  {
    id: 4,
    title: "Colourschemes",
    description: "This is a repo containing colourschemes i use, for my IDE Neovim and for websites. You can see what it looks like in the images above.",
    repo: "https://github.com/Mitchyopp/Colourschemes",
  },
  {
    id: 5,
    title: "はなびら",
    description: "A discord bot called はなびら (hanabira) with the aim of helping the user, this bot is written in the RUST programming language, it uses OPENAI to hold a conversation with others, its also a multipurpose bot with features such as Moderation, Leveling and tracking messages and converting them into experience, Misc games, Afk systems and more. The repo is private for now.",
    image: project5,
  },
  {
    id: 6,
    title: "Kana-learner",
    description: "This is a CLI rust program that presents random hiragana for the user to guess. It's an infinite loop or hiragana that tells you when your right and wrong, the user can break out whenever they please.",
    repo: "https://github.com/Mitchyopp/Kana-learner",
    image: project6,
  },
  {
    id: 7,
    title: "Bash scripts",
    description: "A collection of bash scripts i use all the time.",
    repo: "https://github.com/Mitchyopp/Bash"
  },
  {
    id: 8,
    title: "Todo List",
    description: "A simple website todo list controlled via the dom with javascript.",
    repo: "https://github.com/Mitchyopp/todo",
  }
]
