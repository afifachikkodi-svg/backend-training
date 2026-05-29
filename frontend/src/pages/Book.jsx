import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const [notes, setNotes] = useState([]);

  const getnotes = async () => {
    const response = await axios.get(
      "http://localhost:4000/allNotes"
    );

    setNotes(response.data.allnotebook);
  };

  useEffect(() => {
    getnotes();
  }, []);

  const updateNote = async (id) => {
    const updatedHeading = prompt("Enter new heading");
    const updatedContent = prompt("Enter new content");

    await axios.put(
      `http://localhost:4000/update/${id}`,
      {
        heading: updatedHeading,
        content: updatedContent,
      }
    );

    alert("Note updated successfully");
    getnotes();
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/delete/${id}`
      );

      alert("Deleted successfully");
      getnotes();
    } catch (error) {
      alert("Not deleted");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#0f172a",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#e2e8f0",
          marginBottom: "45px",
          fontSize: "38px",
          fontWeight: "500",
          letterSpacing: "1px",
        }}
      >
        My Notes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
        }}
      >
        {notes.map((element) => (
          <div
            key={element._id}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              padding: "24px",

              border: "1px solid #334155",

              boxShadow:
                "0 4px 20px rgba(0,0,0,0.25)",

              transition: "0.4s ease",

              animation: "fadeIn 0.6s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(0,0,0,0.25)";
            }}
          >
            <h2
              style={{
                marginBottom: "14px",
                fontSize: "24px",
                color: "#f8fafc",
                fontWeight: "500",
              }}
            >
              {element.heading}
            </h2>

            <p
              style={{
                marginBottom: "22px",
                lineHeight: "1.7",
                color: "#cbd5e1",
                fontSize: "15px",
              }}
            >
              {element.content}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <button
                onClick={() =>
                  updateNote(element._id)
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",

                  background: "#0551bb",
                  color: "#e2e8f0",

                  fontSize: "14px",
                  cursor: "pointer",

                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "#475569";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "#334155";
                }}
              >
                Update
              </button>

              <button
                onClick={() =>
                  deleteNote(element._id)
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",

                  background: "#3905b4",
                  color: "#f1f5f9",

                  fontSize: "14px",
                  cursor: "pointer",

                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "#52525b";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "#3f3f46";
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Book;