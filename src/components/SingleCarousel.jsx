import { Component } from 'react'
import { Row, Col ,Carousel} from 'react-bootstrap';
class SingleCarousel extends Component {
    state = {
        films: [],
        currentfilm: {},
    }
    componentDidMount = () => {
        console.log('SONO IN COMPONENTDIDMOUNT')

        this.fetchReservations()
    }

    fetchReservations = () => {
        const URL = 'http://www.omdbapi.com/?apikey=b9f73102&s=' + this.props.film
        fetch(URL)
            .then((response) => {
                console.log(response)
                if (response.ok) {

                    return response.json()
                } else {

                    throw new Error('Errore nella chiamata, response non OK')
                }
            })
            .then((objectFilms) => {
                console.log('EVENTI A DB', objectFilms)

                this.setState({
                    films: objectFilms.Search,
                })
                console.log('EVENTI A DB', this.state)
            })
            .catch((error) => {

                console.log('ERRORE!', error)
            })
    }
    render() {
        return (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
                <Col className="mb-2 text-center px-1">
                    <Carousel
                        onSlide={(i) => {

                            this.setState({

                                currentfilm: this.state.films[i],
                            })
                        }}
                    >
                        {this.state.films.slice(0, 8).map((film) => {
                            return (
                                <Carousel.Item key={film.imdbID}>
                                    <img className="w-100" src={film.Poster} alt="dog pic" />

                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Col>

            </Row>





        );
    }
}

export default SingleCarousel

