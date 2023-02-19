import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import "./Nav.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Phone from "./PhoneInput";

const PersonList = ({ person }) => {
  const [search, setSearch] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(person);
  const [isEmpty, setIsEmpty] = useState(false);
  const [selectedSort, setSelectedSort] = useState("isimArtan");
  const [PhoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    var tempArray = person.filter(
      (item) =>
        item.Name.toLowerCase().includes(search.toLowerCase()) === true ||
        item.LastName.toLowerCase().includes(search.toLowerCase()) === true
    );

    if (selectedSort === "isimArtan") {
      tempArray = tempArray.sort((a, b) => a.Name.localeCompare(b.Name));
    }

    if (selectedSort === "isimAzalan") {
      tempArray = tempArray.sort((a, b) => b.Name.localeCompare(a.Name));
    }
    if (selectedSort === "soyisimAzalan") {
      tempArray = tempArray.sort((a, b) =>
        b.LastName.localeCompare(a.LastName)
      );
    }

    setFilteredPerson(tempArray);
    if (tempArray.length > 0) setIsEmpty(false);
    else setIsEmpty(true);
  }, [search, selectedSort]);
  return (
    <div className="">
      <nav className="navbar">
        <div className="container d-flex justify-content-between navbar-dark">
          <h2 className="d-flex justify-content-center">Telephone Directory</h2>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="d-flex justify-content-center">
        <Link className="btn btn-outline-transparent  m-5" to={"/"}>
          <h2>PERSONS</h2>
        </Link>
        <div>
          <Link className="btn btn-outline-dark  m-5" to={"add-person"}>
            +
          </Link>
        </div>
      </div>
      <table className=" table-striped table-hover table  table-striped d-flex justify-content-center  m-3">
        <tbody>
          {person.length === 0 ? (
            <tr>
              <td className="text-center" colSpan={1}>
                Kişi bulunmamaktadır
              </td>
            </tr>
          ) : (
            <>
              {filteredPerson.map((person, index) => (
                <tr key={index} className="shadow bg-body rounded border border-3">
                  <td className="">{person.Name}</td>
                  <td>{person.LastName} </td>
                  <td> {person.PhoneNumber} </td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <Link
                        className="btn btn-outline-danger"
                        to={`/person-call/${person.id}`}
                      >
                        <i className="fa fa-phone"></i>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <Link
                      className="btn btn-outline-success"
                      to={`/message/${person.id}`}
                    >
                      <FaComment />
                    </Link>
                  </td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <Link
                        className="btn btn-outline-secondary"
                        to={`/person-edit/${person.id}`}
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default PersonList;
