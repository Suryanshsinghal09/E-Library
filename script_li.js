const allBooks = [
    {
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        img: "./book_covers/hound_of_the_baskervilles.jpg", 
        file: "https://www.gutenberg.org/files/2852/2852-h/2852-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        img: "./book_covers/adventures_of_sherlock_holmes.jpg",
        file: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm",
        genre: "Mystery"
    },
    {
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        img: "./book_covers/a_study_in_scarlet.jpg",
        file: "https://www.gutenberg.org/files/244/244-h/244-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Sign of the Four",
        author: "Arthur Conan Doyle",
        img: "./book_covers/the_sign_of_the_four.jpg",
        file: "https://www.gutenberg.org/files/3289/3289-h/3289-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Moonstone",
        author: "Wilkie Collins",
        img: "./book_covers/the_moonstone.jpg",
        file: "https://www.gutenberg.org/files/155/155-h/155-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Woman in White",
        author: "Wilkie Collins",
        img: "./book_covers/the_woman_in_white.jpg",
        file: "https://www.gutenberg.org/files/5846/5846-h/5846-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Innocence of Father Brown",
        author: "G. K. Chesterton",
        img: "./book_covers/father_brown.jpg",
        file: "https://www.gutenberg.org/files/204/204-h/204-h.htm",
        genre: "Mystery"
    },
    {
        title: "Trent's Last Case",
        author: "E. C. Bentley",
        img: "./book_covers/trents_last_case.jpg",
        file: "https://www.gutenberg.org/files/3160/3160-h/3160-h.htm",
        genre: "Mystery"
    },
    {
        title: "The Mystery of the Yellow Room",
        author: "Gaston Leroux",
        img: "./book_covers/mystery_of_yellow_room.jpg",
        file: "https://www.gutenberg.org/files/17062/17062-h/17062-h.htm",
        genre: "Mystery"
    },

    {
        title: "1984",
        author: "George Orwell",
        img: "./book_covers/1984.jpg",
        file: "https://www.gutenberg.org/ebooks/1984", 
        genre: "Sci-Fi"
    },
    {
        title: "Around the World in Eighty Days",
        author: "Jules Verne",
        img: "./book_covers/around_the_world.jpg",
        file: "https://www.gutenberg.org/files/103/103-h/103-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "The Time Machine",
        author: "H. G. Wells",
        img: "./book_covers/the_time_machine.jpg",
        file: "https://www.gutenberg.org/files/35/35-h/35-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "The War of the Worlds",
        author: "H. G. Wells",
        img: "./book_covers/war_of_the_worlds.jpg",
        file: "https://www.gutenberg.org/files/36/36-h/36-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        img: "./book_covers/journey_to_the_center_of_earth.jpg",
        file: "https://www.gutenberg.org/files/18857/18857-h/18857-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "20,000 Leagues Under the Sea",
        author: "Jules Verne",
        img: "./book_covers/20000_leagues.jpg",
        file: "https://www.gutenberg.org/files/164/164-h/164-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "Flatland: A Romance of Many Dimensions",
        author: "Edwin A. Abbott",
        img: "./book_covers/flatland.jpg",
        file: "https://www.gutenberg.org/files/201/201-h/201-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "R.U.R.",
        author: "Karel Capek",
        img: "./book_covers/rur_cover.jpg",
        file: "https://www.gutenberg.org/files/59104/59104-h/59104-h.htm",
        genre: "Sci-Fi"
    },
    {
        title: "A Princess of Mars",
        author: "Edgar Rice Burroughs",
        img: "./book_covers/a_princess_of_mars.jpg",
        file: "https://www.gutenberg.org/files/632/632-h/632-h.htm",
        genre: "Sci-Fi"
    },

    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        img: "./book_covers/alice_in_wonderland.jpg",
        file: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
        genre: "Fantasy"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        img: "./book_covers/frankenstein.jpg",
        file: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
        genre: "Fantasy"
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        img: "./book_covers/dracula.jpg",
        file: "https://www.gutenberg.org/files/345/345-h/345-h.htm",
        genre: "Fantasy"
    },
    {
        title: "The Wonderful Wizard of Oz",
        author: "L. Frank Baum",
        img: "./book_covers/wizard_of_oz.jpg",
        file: "https://www.gutenberg.org/files/55/55-h/55-h.htm",
        genre: "Fantasy"
    },
    {
        title: "Peter Pan",
        author: "J. M. Barrie",
        img: "./book_covers/peter_pan.jpg",
        file: "https://www.gutenberg.org/files/16/16-h/16-h.htm",
        genre: "Fantasy"
    },
    {
        title: "A Midsummer Night's Dream",
        author: "William Shakespeare",
        img: "./book_covers/midsummer_nights_dream.jpg",
        file: "https://www.gutenberg.org/files/1514/1514-h/1514-h.htm",
        genre: "Fantasy"
    },
    {
        title: "The King in Yellow",
        author: "Robert W. Chambers",
        img: "./book_covers/the_king_in_yellow.jpg",
        file: "https://www.gutenberg.org/files/8492/8492-h/8492-h.htm",
        genre: "Fantasy"
    },
    {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        img: "./book_covers/gullivers_travels.jpg",
        file: "https://www.gutenberg.org/files/829/829-h/829-h.htm",
        genre: "Fantasy"
    },
    {
        title: "Tarzan of the Apes",
        author: "Edgar Rice Burroughs",
        img: "./book_covers/tarzan_of_the_apes.jpg",
        file: "https://www.gutenberg.org/files/78/78-h/78-h.htm",
        genre: "Fantasy"
    },

    {
        title: "The Republic",
        author: "Plato",
        img: "./book_covers/the_republic.jpg",
        file: "https://www.gutenberg.org/files/150/150-h/150-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "Walden",
        author: "Henry David Thoreau",
        img: "./book_covers/walden.jpg",
        file: "https://www.gutenberg.org/files/205/205-h/205-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "Leaves of Grass",
        author: "Walt Whitman",
        img: "./book_covers/leaves_of_grass.jpg",
        file: "https://www.gutenberg.org/files/132/132-h/132-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "The Communist Manifesto",
        author: "Karl Marx and Friedrich Engels",
        img: "./book_covers/communist_manifesto.jpg",
        file: "https://www.gutenberg.org/files/61/61-h/61-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "On the Origin of Species",
        author: "Charles Darwin",
        img: "./book_covers/origin_of_species.jpg",
        file: "https://www.gutenberg.org/files/2009/2009-h/2009-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "The Art of War",
        author: "Sun Tzu",
        img: "./book_covers/the_art_of_war.jpg", 
        file: "https://www.gutenberg.org/files/132/132-h/132-h.htm", 
        genre: "Non-Fiction"
    },
    {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        img: "./book_covers/the_prince.jpg",
        file: "https://www.gutenberg.org/files/1232/1232-h/1232-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "Essays of Michel de Montaigne",
        author: "Michel de Montaigne",
        img: "./book_covers/montaigne_essays.jpg",
        file: "https://www.gutenberg.org/files/3600/3600-h/3600-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "The Souls of Black Folk",
        author: "W. E. B. Du Bois",
        img: "./book_covers/souls_of_black_folk.jpg",
        file: "https://www.gutenberg.org/files/408/408-h/408-h.htm",
        genre: "Non-Fiction"
    },
    {
        title: "Autobiography of Benjamin Franklin",
        author: "Benjamin Franklin",
        img: "./book_covers/ben_franklin_auto.jpg",
        file: "https://www.gutenberg.org/files/2020/2020-h/2020-h.htm",
        genre: "Non-Fiction"
    },

    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        img: "./book_covers/pride_and_prejudice.jpg", 
        file: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
        genre: "Classic"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        img: "./book_covers/moby_dick.jpg", 
        file: "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
        genre: "Classic"
    },
    {
        title: "A Little Princess",
        author: "Frances Hodgson Burnett",
        img: "./book_covers/a_little_princess.jpg",
        file: "https://www.gutenberg.org/files/57/57-h/57-h.htm",
        genre: "Classic"
    },
    {
        title: "The Odyssey",
        author: "Homer",
        img: "./book_covers/the_odyssey.jpg",
        file: "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm",
        genre: "Classic"
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        img: "./book_covers/great_expectations.jpg",
        file: "https://www.gutenberg.org/files/1400/1400-h/1400-h.htm",
        genre: "Classic"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        img: "./book_covers/jane_eyre.jpg",
        file: "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm",
        genre: "Classic"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        img: "./book_covers/wuthering_heights.jpg",
        file: "https://www.gutenberg.org/files/768/768-h/768-h.htm",
        genre: "Classic"
    },
    {
        title: "Little Women",
        author: "Louisa May Alcott",
        img: "./book_covers/little_women.jpg",
        file: "https://www.gutenberg.org/files/514/514-h/514-h.htm",
        genre: "Classic"
    },
    {
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        img: "./book_covers/the_scarlet_letter.jpg",
        file: "https://www.gutenberg.org/files/33/33-h/33-h.htm",
        genre: "Classic"
    },
    {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        img: "./book_covers/treasure_island.jpg",
        file: "https://www.gutenberg.org/files/120/120-h/120-h.htm",
        genre: "Classic"
    },
    {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        img: "./book_covers/the_secret_garden.jpg",
        file: "https://www.gutenberg.org/files/17396/17396-h/17396-h.htm",
        genre: "Classic"
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        img: "./book_covers/count_of_monte_cristo.jpg",
        file: "https://www.gutenberg.org/files/1184/1184-h/1184-h.htm",
        genre: "Classic"
    },
    {
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        img: "./book_covers/huckleberry_finn.jpg",
        file: "https://www.gutenberg.org/files/76/76-h/76-h.htm",
        genre: "Classic"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        img: "./book_covers/dorian_gray.jpg",
        file: "https://www.gutenberg.org/files/174/174-h/174-h.htm",
        genre: "Classic"
    },
    {
        title: "Dr. Jekyll and Mr. Hyde",
        author: "Robert Louis Stevenson",
        img: "./book_covers/jekyll_and_hyde.jpg",
        file: "https://www.gutenberg.org/files/43/43-h/43-h.htm",
        genre: "Classic"
    },
    {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        img: "./book_covers/three_musketeers.jpg",
        file: "https://www.gutenberg.org/files/1257/1257-h/1257-h.htm",
        genre: "Classic"
    },
    {
        title: "Sense and Sensibility",
        author: "Jane Austen",
        img: "./book_covers/sense_and_sensibility.jpg",
        file: "https://www.gutenberg.org/files/161/161-h/161-h.htm",
        genre: "Classic"
    },
    {
        title: "Tess of the d'Urbervilles",
        author: "Thomas Hardy",
        img: "./book_covers/tess_of_the_durbervilles.jpg",
        file: "https://www.gutenberg.org/files/110/110-h/110-h.htm",
        genre: "Classic"
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        img: "./book_covers/a_tale_of_two_cities.jpg",
        file: "https://www.gutenberg.org/files/98/98-h/98-h.htm",
        genre: "Classic"
    },
    {
        title: "Les Misérables (Abridged/Volume 1)",
        author: "Victor Hugo",
        img: "./book_covers/les_miserables.jpg",
        file: "https://www.gutenberg.org/files/135/135-h/135-h.htm",
        genre: "Classic"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        img: "./book_covers/anna_karenina.jpg",
        file: "https://www.gutenberg.org/files/1399/1399-h/1399-h.htm",
        genre: "Classic"
    },
    {
        title: "The Jungle Book",
        author: "Rudyard Kipling",
        img: "./book_covers/the_jungle_book.jpg",
        file: "https://www.gutenberg.org/files/359/359-h/359-h.htm",
        genre: "Classic"
    },
];


let currentBooks = [...allBooks]; 
const bookGrid = document.getElementById("book-grid");
const noResultsMessage = document.getElementById("no-results");
const searchBar = document.getElementById("search-bar");

function displayBooks(bookList) {
    if (!bookGrid) return;

    bookGrid.innerHTML = "";

    if (bookList.length === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }

    bookList.forEach((book) => {
        const fallbackText = encodeURIComponent(`${book.title} by ${book.author}`);
        const fallbackImgUrl = `https://placehold.co/400x560/005f73/ffffff?text=${fallbackText}&font=lato`; 

        const bookCard = `
            <div class="book-card fade-in">
                <img src="${book.img}" 
                    alt="Cover of ${book.title}" 
                    onerror="this.src='${fallbackImgUrl}'; this.onerror=null;">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <p class="genre">${book.genre}</p>
                    <a href="${book.file}" class="btn-read" target="_blank" rel="noopener noreferrer">Read Now</a>
                </div>
            </div>
        `;
        bookGrid.innerHTML += bookCard;
    });

    observeFadeInElements();
}

if (searchBar) {
    searchBar.addEventListener("keyup", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredBooks = currentBooks.filter((book) => {
            return (
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
        });

        displayBooks(filteredBooks);
    });
}

function filterBooks(genre) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.textContent.trim() === genre) {
            btn.classList.add("active");
        }
    });

    if (searchBar) {
        searchBar.value = '';
    }

    if (genre === "All") {
        currentBooks = [...allBooks];
    } else {
        currentBooks = allBooks.filter((book) => book.genre === genre);
    }

    displayBooks(currentBooks);
}

let observer;

function observeFadeInElements() {
    const fadeElements = document.querySelectorAll(".fade-in");

    if (observer) {
        observer.disconnect();
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    fadeElements.forEach((el) => {
        if (!el.classList.contains("visible")) {
            observer.observe(el);
        }
    });
}
 
function showPage(pageId) {
    const pages = document.querySelectorAll(".page-content");
    pages.forEach((page) => {
        page.classList.remove("active");
    });
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add("active");
    }
    setTimeout(() => {
        const fadeElements = activePage ? activePage.querySelectorAll(".fade-in") : [];
        fadeElements.forEach((el) => {
            el.classList.remove("visible"); 
        });
        observeFadeInElements(); 
    }, 50);

    window.scrollTo(0, 0);
}

function scrollToBooks() {
    showPage("page-home");

    setTimeout(() => {
        const anchor = document.getElementById("book-collection-anchor");
        if (anchor) {
             anchor.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const allButton = document.querySelector('.filter-btn');
    if (allButton) {
        allButton.classList.add('active');
    }
    displayBooks(allBooks);
    showPage("page-home");
});