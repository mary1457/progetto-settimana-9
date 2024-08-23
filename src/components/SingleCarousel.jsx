import { Component } from 'react'
import { Row, Col ,Carousel, Alert, Spinner, } from 'react-bootstrap';
import '../style.css'; 
class SingleCarousel extends Component {
    state = {
        films: [],
        currentfilm: {},
        isLoading: true,
        isError: false,
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
                    isLoading: false,
                })
                console.log('EVENTI A DB', this.state)
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    isError: true, 
                  })
                console.log('ERRORE!', error)
            })
    }
    render() {
        return (<>
            <div className="d-flex justify-content-center mb-3">
            {this.state.isLoading && (
              <Spinner animation="border" variant="danger" />
            )}
            {this.state.isError && (
              <Alert variant="danger">
                Errore
              </Alert>
            )}
          </div>
                    <Carousel className='h-100 mb-4' interval={null} indicators={false}
                        onSlide={(i) => {

                            this.setState({

                                currentfilm: this.state.films[i],
                            })
                        }}
                    ><Carousel.Item className='h-100' >
                        <Row className='h-100 '>
                        {this.state.films.slice(0, 4).map((film) => {
                            return (
                                
                                    <Col  key={film.imdbID}>  <img className="w-100 d-inline film-image " src={film.Poster} alt="" />
                                    </Col>
                                  
                                
                            )
                        })}
                        </Row >
                        </Carousel.Item >
                        <Carousel.Item active="true" className='h-100'>
                        <Row className='h-100 '>
                        {this.state.films.slice(4,8).map((film) => {
                            return (
                                
                                    <Col  key={film.imdbID}>  <img className="w-100 d-inline film-image " src={film.Poster} alt="" />
                                    </Col>
                                  
                                
                            )
                        })}
                        </Row>
        </Carousel.Item>
                    </Carousel>
                



                    </>


        );
    }
}

export default SingleCarousel

