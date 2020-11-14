import React from 'react';
import LOGOIMG from '../images/olx-logo.jpg';
import '../component.css';
import 'bootstrap/dist/css/bootstrap.min.css'




class Logo extends React.Component {
    render() {
        return (
            <div className='logoImg rel'>
                <img src={LOGOIMG} width='84px' height='64px' />
            </div>
        )
    }
}


class Header extends React.Component {
    constructor() {
        super()
        this.state = [
            { ID: 1, label: 'Mobile Phones' },
            { ID: 2, label: 'Cares' },
            { ID: 3, label: 'Motorcycles' },
            { ID: 4, label: 'Houses' },
            { ID: 5, label: 'TV -Video-Audio' },
            { ID: 6, label: 'Tablets' },
            { ID: 7, label: 'Lands & Plots' }
        ]


        this.cat = [
            'Vehicles',
            'Tractors & Trailers',
            'Boats',
            'Other Vehicles',
            'Rickshaw & Chingchi',
            'Buses, Vans & Trucks',
            'Spare Parts',
            'Cars Accessories',
            'Cars on Installments',
            'Cars',
            'Mobiles',
            'Mobile Phones',
            'Accessories',
            'Tablets',
            'Electronics & Home Appliances',
            'Washing Machines & Dryers',
            'Fridges & Freezers',
            'AC & Coolers',
            'Kitchen Appliances',
            'Generators, UPS & Power Solutions',
            'Other Home Appliances',
            'Games & Entertainment',
            'Cameras & Accessories',
            'TV - Video - Audio',
            'Computers & Accessories',
            'Property for Sale',
            'Portions & Floors',
            'Shops - Offices - Commercial Space',
            'Apartments & Flats',
            'Houses',
            'Land & Plots'
        ]
        this.catb = [
            'Animals',
            'Other Animals',
            'Pet Food & Accessories',
            'Horses',
            'Livestock',
            'Dogs',
            'Cats',
            'Hens & Aseel',
            'Birds',
            'Fish & Aquariums',
            'Furniture & Home Decor',
            'Other Household Items',
            'Office Furniture',
            'Curtains & Blinds',
            'Rugs & Carpets',
            'Painting & Mirrors',
            'Garden & Outdoor',
            'Tables & Dining',
            'Home Decoration',
            'Beds & Wardrobes',
            'Sofa & Chairs',
            'Business, Industrial & Agriculture',
            'Medical & Pharma',
            'Other Business & Industry',
            'Agriculture',
            'Construction & Heavy Machinery',
            'Trade & Industrial',
            'Food & Restaurants',
            'Business for Sale',
            'Bikes',
            'Scooters',
            'ATV & Quads',
            'Bicycles',
            'Spare Parts',
            'Motorcycles'
        ]
        this.catC = [
            'Fashion & Beauty',
            'Other Fashion',
            'Couture',
            'Lawn & Pret',
            'Wedding',
            'Watches',
            'Skin & Hair',
            'Make Up',
            'Jewellery',
            'Footwear',
            'Clothes',
            'Accessories',
            'Property for Rent',
            'Land & Plots',
            'Vacation Rentals - Guest Houses',
            'Roommates & Paying Guests',
            'Rooms',
            'Shops - Offices - Commercial Space',
            'Portions & Floors',
            'Apartments & Flats',
            'Houses',
            'Jobs',
            'Other Jobs',
            'Part - Time',
            'Domestic Staff',
            'Medical',
            'Manufacturing',
            'Accounting & Finance',
            'Human Resources',
            'Clerical & Administration',
            'Hotels & Tourism',
            'IT & Networking',
            'Sales',
            'Customer Service',
            'Education',
            'Advertising & PR',
            'Marketing',
            'Online'
        ]
        this.catD = [
            'Services',
            'Farm & Fresh Food',
            'Catering & Restaurant',
            'Home & Office Repair',
            'Movers & Packers',
            'Maids & Domestic Help',
            'Health & Beauty',
            'Event Services',
            'Electronics & Computer Repair',
            'Other Services',
            'Web Development',
            'Drivers & Taxi',
            'Car Rental',
            'Travel & Visa',
            'Education & Classes',
            'Books, Sports & Hobbies',
            'Other Hobbies',
            'Gym & Fitness',
            'Sports Equipment',
            'Musical Instruments',
            'Books & Magazines',
            'Kids',
            'Kids Accessories',
            'Kids Bikes',
            'Swings & Slides',
            'Prams & Walkers',
            'Toys',
            'Kids Furniture'
        ]

    }

    render() {
        return (
            <React.Fragment>
                <div className='header fixed flex aic'>


                    <div className='logo rel'>
                        <Logo />
                    </div>
                    <div className='location rel flex aic'>
                        <div className='icon rel flex aic' >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </div>
                        <div>
                            <input className='label s24 aic rel' placeholder='Pakistan' list="brow" />
                            <datalist  id="brow">
                                <option  className='s24'value="Panjab">
                                </option><option className='s24' value="Islamabad">
                                </option><option className='s24' value="Sindh">
                                </option><option className='s24' value="KPK">
                                </option></datalist>
                        </div>

                    </div>
                    <div className='search flex aic'>
                        <input type='text' placeholder='Find Cars, Mobile Phones and more...' className='query font s22' />
                        <button className='icon-search go'>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </button>

                    </div>
                    <div className='action flex aic'>

                        <a href='/account/login' className='a noul noulh fontb s22 '>Log In</a>
                        <button className='sell flex aic ico'>
                            <div className='icon-plus ico'>
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></div>
                            <h2 className='sell-text s24 fontb'>SELL</h2>
                        </button>

                    </div>

                </div>
                <div className='hnav fixed flex '>
                    <div className="dropdown rel">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All Categories
  </a>

                        <div className="dropdown-menu dd rel " aria-labelledby="dropdownMenuLink">

                            <div class="container ddc flex rel">
                                <div>{this.cat.map(item => {
                                    {
                                        if (item === 'Vehicles' || item === 'Mobiles' ||
                                            item === 'Electronics & Home Appliances' ||
                                            item === 'Property for Sale') {
                                            return (
                                                < div className="row ddr rel" >
                                                    <a className='dh fontb noul noulh colr'>{item}</a>
                                                    <div className="col-4 dc">
                                                    </div>
                                                </div>

                                            )
                                        }
                                        else {
                                            return (
                                                < div className="row ddr" >
                                                    <a className='dl s18 noul noulh colr'>{item}</a>
                                                    <div className="col-4 dc">
                                                    </div>
                                                </div>

                                            )
                                        }
                                    }
                                })}</div>
                                <div>
                                    {this.catb.map(item => {
                                        {
                                            if (item === 'Animals' || item === 'Furniture & Home Decor' ||
                                                item === 'Business, Industrial & Agriculture' ||
                                                item === 'Property for Sale') {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dh fontb noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                            else {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dl s18 noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                        }
                                    })}
                                </div>
                                <div>
                                    {this.catC.map(item => {
                                        {
                                            if (item === 'Fashion & Beauty' ||
                                                item === 'Property for Rent' ||
                                                item === 'Jobs') {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dh fontb noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                            else {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dl s18 noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                        }
                                    })}
                                </div><div>
                                    {this.catD.map(item => {
                                        {
                                            if (item === 'Services' || item === 'Books, Sports & Hobbies' ||
                                                item === 'Kids') {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dh fontb noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                            else {
                                                return (
                                                    < div className="row ddr" >
                                                        <a className='dl s18 noul noulh colr'>{item}</a>
                                                        <div className="col-4 dc">
                                                        </div>
                                                    </div>

                                                )
                                            }
                                        }
                                    })}
                                </div>




                            </div>

                        </div>

                    </div>
                    {
                        this.state.map(item => {
                            return (
                                <a href={'/' + item.ID} className=' cat-btns noul noulh font s20 colr'>{item.label}</a>
                            )
                        })

                    }



                </div>
            </React.Fragment >





        )
    }
}


export default Header;